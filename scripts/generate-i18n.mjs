#!/usr/bin/env node

import { createHash } from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";
import fs from "node:fs/promises";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const I18N_FILE_PATH = path.join(PROJECT_ROOT, "src", "data", "i18n.js");
const CACHE_FILE_PATH = path.join(PROJECT_ROOT, ".i18n-translate-cache.json");
const STATE_FILE_PATH = path.join(PROJECT_ROOT, ".i18n-state.json");

const args = new Set(process.argv.slice(2));
const isQuiet = args.has("--quiet");
const isDryRun = args.has("--dry-run");
const isOffline = args.has("--offline");
const isForced = args.has("--force");
const TRANSLATION_PROVIDER = (process.env.PORTFOLIO_I18N_PROVIDER || "auto").toLowerCase();
const REQUEST_TIMEOUT_MS = Number.parseInt(process.env.PORTFOLIO_I18N_TIMEOUT_MS || "12000", 10);
const LIBRE_TRANSLATE_URL = process.env.PORTFOLIO_I18N_LIBRE_URL || "https://libretranslate.com/translate";
const DEEPL_API_KEY = process.env.PORTFOLIO_I18N_DEEPL_API_KEY || "";
const DEEPL_API_URL = process.env.PORTFOLIO_I18N_DEEPL_API_URL || "https://api-free.deepl.com/v2/translate";
const MYMEMORY_EMAIL = process.env.PORTFOLIO_I18N_MYMEMORY_EMAIL || "";

function log(message) {
  if (!isQuiet) {
    console.log(message);
  }
}

function stableHash(value) {
  const normalized = JSON.stringify(value);
  return createHash("sha256").update(normalized).digest("hex");
}

function collectStrings(node, output = new Set()) {
  if (typeof node === "string") {
    output.add(node);
    return output;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectStrings(item, output));
    return output;
  }

  if (node && typeof node === "object") {
    Object.values(node).forEach((value) => collectStrings(value, output));
  }

  return output;
}

function mapStrings(node, pathParts, mapper) {
  if (typeof node === "string") {
    return mapper(node, pathParts);
  }

  if (Array.isArray(node)) {
    return node.map((value, index) => mapStrings(value, [...pathParts, index], mapper));
  }

  if (node && typeof node === "object") {
    const mapped = {};
    Object.entries(node).forEach(([key, value]) => {
      mapped[key] = mapStrings(value, [...pathParts, key], mapper);
    });
    return mapped;
  }

  return node;
}

function getByPath(node, pathParts) {
  return pathParts.reduce((current, part) => {
    if (current === null || current === undefined) {
      return undefined;
    }
    return current[part];
  }, node);
}

function protectPlaceholders(text) {
  const placeholders = [];
  const protectedText = text.replace(/\{[^{}]+\}/g, (match) => {
    const token = `__PH_${placeholders.length}__`;
    placeholders.push(match);
    return token;
  });

  return { protectedText, placeholders };
}

function restorePlaceholders(text, placeholders) {
  return text.replace(/__PH_(\d+)__/g, (_, rawIndex) => {
    const index = Number(rawIndex);
    return placeholders[index] ?? "";
  });
}

async function readJsonFile(filePath, fallback) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch {
    return fallback;
  }
}

async function writeJsonFile(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function getProviderOrder() {
  if (TRANSLATION_PROVIDER === "auto") {
    const providers = ["google", "mymemory", "libre"];
    if (DEEPL_API_KEY) {
      providers.push("deepl");
    }
    return providers;
  }

  if (TRANSLATION_PROVIDER === "deepl" && !DEEPL_API_KEY) {
    throw new Error("PORTFOLIO_I18N_PROVIDER=deepl requires PORTFOLIO_I18N_DEEPL_API_KEY");
  }

  return [TRANSLATION_PROVIDER];
}

function resolveDeepLTargetLanguage(language) {
  const mapping = {
    en: "EN",
    id: "ID",
    ar: "AR"
  };

  return mapping[language] || language.toUpperCase();
}

function shortenError(error) {
  const message = error instanceof Error ? error.message : String(error);
  return message.length > 160 ? `${message.slice(0, 160)}...` : message;
}

async function fetchJsonWithTimeout(url, options = {}) {
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: abortController.signal
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`HTTP ${response.status}${body ? `: ${body.slice(0, 120)}` : ""}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

async function translateTextViaGoogle(protectedText, targetLanguage) {
  const endpoint = new URL("https://translate.googleapis.com/translate_a/single");
  endpoint.searchParams.set("client", "gtx");
  endpoint.searchParams.set("sl", "en");
  endpoint.searchParams.set("tl", targetLanguage);
  endpoint.searchParams.set("dt", "t");
  endpoint.searchParams.set("q", protectedText);

  const payload = await fetchJsonWithTimeout(endpoint, {
    headers: {
      "user-agent": "Mozilla/5.0",
      accept: "application/json"
    }
  });

  const translatedSegments = Array.isArray(payload?.[0]) ? payload[0] : [];
  return translatedSegments.map((part) => part?.[0] ?? "").join("").trim();
}

async function translateTextViaMyMemory(protectedText, targetLanguage) {
  const endpoint = new URL("https://api.mymemory.translated.net/get");
  endpoint.searchParams.set("q", protectedText);
  endpoint.searchParams.set("langpair", `en|${targetLanguage}`);
  if (MYMEMORY_EMAIL) {
    endpoint.searchParams.set("de", MYMEMORY_EMAIL);
  }

  const payload = await fetchJsonWithTimeout(endpoint, {
    headers: {
      accept: "application/json"
    }
  });

  const translated = payload?.responseData?.translatedText;
  return typeof translated === "string" ? translated.trim() : "";
}

async function translateTextViaLibre(protectedText, targetLanguage) {
  const payload = await fetchJsonWithTimeout(LIBRE_TRANSLATE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({
      q: protectedText,
      source: "en",
      target: targetLanguage,
      format: "text"
    })
  });

  const translated = payload?.translatedText;
  return typeof translated === "string" ? translated.trim() : "";
}

async function translateTextViaDeepL(protectedText, targetLanguage) {
  if (!DEEPL_API_KEY) {
    throw new Error("Missing PORTFOLIO_I18N_DEEPL_API_KEY");
  }

  const form = new URLSearchParams();
  form.set("auth_key", DEEPL_API_KEY);
  form.set("source_lang", "EN");
  form.set("target_lang", resolveDeepLTargetLanguage(targetLanguage));
  form.set("text", protectedText);

  const payload = await fetchJsonWithTimeout(DEEPL_API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json"
    },
    body: form.toString()
  });

  const translated = payload?.translations?.[0]?.text;
  return typeof translated === "string" ? translated.trim() : "";
}

async function translateTextWithProvider(text, targetLanguage, provider) {
  if (!text.trim()) {
    return text;
  }

  const { protectedText, placeholders } = protectPlaceholders(text);
  let translated = "";

  switch (provider) {
    case "google":
      translated = await translateTextViaGoogle(protectedText, targetLanguage);
      break;
    case "mymemory":
      translated = await translateTextViaMyMemory(protectedText, targetLanguage);
      break;
    case "libre":
      translated = await translateTextViaLibre(protectedText, targetLanguage);
      break;
    case "deepl":
      translated = await translateTextViaDeepL(protectedText, targetLanguage);
      break;
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }

  if (!translated) {
    throw new Error(`Empty translation response from ${provider}`);
  }

  return restorePlaceholders(translated, placeholders);
}

async function translateBatch(texts, targetLanguage, translationCache) {
  const translatedByText = new Map();
  let generatedCount = 0;
  let cacheHitCount = 0;
  let failureCount = 0;
  let cursor = 0;
  let printedFailures = 0;
  const providers = getProviderOrder();

  const workerCount = Math.min(6, Math.max(1, texts.length));

  async function worker() {
    while (true) {
      const currentIndex = cursor;
      cursor += 1;

      if (currentIndex >= texts.length) {
        return;
      }

      const sourceText = texts[currentIndex];
      if (translatedByText.has(sourceText)) {
        continue;
      }

      const cached = translationCache[sourceText];
      if (typeof cached === "string" && cached.length > 0) {
        translatedByText.set(sourceText, cached);
        cacheHitCount += 1;
        continue;
      }

      if (isOffline) {
        translatedByText.set(sourceText, sourceText);
        continue;
      }

      try {
        let translated = null;
        const providerErrors = [];

        for (const provider of providers) {
          try {
            translated = await translateTextWithProvider(sourceText, targetLanguage, provider);
            break;
          } catch (error) {
            providerErrors.push(`${provider}: ${shortenError(error)}`);
          }
        }

        if (!translated) {
          throw new Error(providerErrors.join(" | "));
        }

        translationCache[sourceText] = translated;
        translatedByText.set(sourceText, translated);
        generatedCount += 1;
      } catch (error) {
        translatedByText.set(sourceText, null);
        failureCount += 1;
        if (!isQuiet && printedFailures < 5) {
          printedFailures += 1;
          console.warn(
            `[i18n] Failed ${targetLanguage} translation for: "${sourceText.slice(0, 80)}" -> ${shortenError(error)}`
          );
        }
      }
    }
  }

  await Promise.all(Array.from({ length: workerCount }, () => worker()));

  return {
    translatedByText,
    generatedCount,
    cacheHitCount,
    failureCount
  };
}

async function main() {
  const i18nModuleUrl = `${pathToFileURL(I18N_FILE_PATH).href}?v=${Date.now()}`;
  const {
    DEFAULT_LANGUAGE,
    SUPPORTED_LANGUAGES,
    RTL_LANGUAGES,
    TRANSLATIONS
  } = await import(i18nModuleUrl);

  const sourceLanguage = DEFAULT_LANGUAGE;
  const sourceTree = TRANSLATIONS[sourceLanguage];

  if (!sourceTree || typeof sourceTree !== "object") {
    throw new Error("Invalid i18n source: missing English translations.");
  }

  const sourceHash = stableHash(sourceTree);
  const previousState = await readJsonFile(STATE_FILE_PATH, {});

  if (!isForced && previousState.sourceHash === sourceHash) {
    log("[i18n] No English changes detected. Skip generation.");
    return;
  }

  const cache = await readJsonFile(CACHE_FILE_PATH, {});
  const allSourceStrings = Array.from(collectStrings(sourceTree));
  const activeProviders = getProviderOrder();

  log(`[i18n] Source language: ${sourceLanguage}`);
  log(`[i18n] Strings to evaluate: ${allSourceStrings.length}`);
  log(`[i18n] Provider mode: ${TRANSLATION_PROVIDER} (${activeProviders.join(" -> ")})`);

  const generatedTranslations = {};

  for (const language of SUPPORTED_LANGUAGES) {
    if (language === sourceLanguage) {
      generatedTranslations[language] = sourceTree;
      continue;
    }

    const currentLanguageTree = TRANSLATIONS[language] || {};
    const languageCache = cache[language] && typeof cache[language] === "object" ? cache[language] : {};
    cache[language] = languageCache;

    log(`[i18n] Generating ${language}...`);

    const { translatedByText, generatedCount, cacheHitCount, failureCount } = await translateBatch(
      allSourceStrings,
      language,
      languageCache
    );

    const generatedTree = mapStrings(sourceTree, [], (sourceText, pathParts) => {
      const translated = translatedByText.get(sourceText);
      if (typeof translated === "string" && translated.length > 0) {
        return translated;
      }

      const fallbackValue = getByPath(currentLanguageTree, pathParts);
      if (typeof fallbackValue === "string" && fallbackValue.length > 0) {
        return fallbackValue;
      }

      return sourceText;
    });

    generatedTranslations[language] = generatedTree;
    log(
      `[i18n] ${language}: generated=${generatedCount}, cache=${cacheHitCount}, failed=${failureCount}`
    );
  }

  const orderedTranslations = {};
  SUPPORTED_LANGUAGES.forEach((language) => {
    orderedTranslations[language] = generatedTranslations[language] ?? TRANSLATIONS[language] ?? sourceTree;
  });

  const currentSnapshot = {
    DEFAULT_LANGUAGE,
    SUPPORTED_LANGUAGES,
    RTL_LANGUAGES,
    TRANSLATIONS
  };
  const nextSnapshot = {
    DEFAULT_LANGUAGE,
    SUPPORTED_LANGUAGES,
    RTL_LANGUAGES,
    TRANSLATIONS: orderedTranslations
  };
  const hasTranslationChanges = stableHash(currentSnapshot) !== stableHash(nextSnapshot);

  const nextFileContent = `// Edit English content, then run \`npm run i18n:generate\` to regenerate other languages.\nexport const DEFAULT_LANGUAGE = ${JSON.stringify(
    DEFAULT_LANGUAGE
  )};\nexport const SUPPORTED_LANGUAGES = ${JSON.stringify(
    SUPPORTED_LANGUAGES
  )};\nexport const RTL_LANGUAGES = ${JSON.stringify(
    RTL_LANGUAGES
  )};\n\nexport const TRANSLATIONS = ${JSON.stringify(orderedTranslations, null, 2)};\n`;

  if (isDryRun) {
    log(
      hasTranslationChanges
        ? "[i18n] Dry run complete. Translation updates detected."
        : "[i18n] Dry run complete. No translation changes detected."
    );
    return;
  }

  if (hasTranslationChanges) {
    await fs.writeFile(I18N_FILE_PATH, nextFileContent, "utf8");
    log("[i18n] Updated translation file.");
  } else {
    log("[i18n] Translation file already up to date.");
  }

  await writeJsonFile(CACHE_FILE_PATH, cache);
  await writeJsonFile(STATE_FILE_PATH, {
    sourceHash,
    updatedAt: new Date().toISOString()
  });

  log("[i18n] Translation generation completed.");
}

main().catch((error) => {
  console.error(`[i18n] Generation failed: ${error.message}`);
  process.exit(1);
});
