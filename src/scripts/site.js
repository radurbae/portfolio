import { DEFAULT_LANGUAGE, RTL_LANGUAGES, SUPPORTED_LANGUAGES, TRANSLATIONS } from "@/data/i18n";

const THEME_STORAGE_KEY = "portfolio-theme";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const HEADLINE_STAGGER_MS = 20;
const DESCRIPTION_STAGGER_MS = 11;
const HEADLINE_START_DELAY_MS = 120;
const DESCRIPTION_BUFFER_MS = 420;

let currentLanguage = DEFAULT_LANGUAGE;

function normalizePath(pathname, baseUrl) {
  const cleanBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  let normalized = pathname || "/";

  if (cleanBase && cleanBase !== "/" && normalized.startsWith(cleanBase)) {
    normalized = normalized.slice(cleanBase.length) || "/";
  }

  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }

  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }

  return normalized || "/";
}

function getByPath(source, path) {
  if (!source || !path) return undefined;

  return path.split(".").reduce((current, segment) => {
    if (current === null || current === undefined) {
      return undefined;
    }

    return current[segment];
  }, source);
}

function interpolateTemplate(value, variables = {}) {
  return value.replace(/\{(\w+)\}/g, (_, key) => {
    if (variables[key] === undefined || variables[key] === null) {
      return `{${key}}`;
    }

    return String(variables[key]);
  });
}

function t(key, language = currentLanguage, variables = {}) {
  const languagePack = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
  const fallbackPack = TRANSLATIONS[DEFAULT_LANGUAGE];

  let value = getByPath(languagePack, key);

  if (value === undefined) {
    value = getByPath(fallbackPack, key);
  }

  if (typeof value !== "string") {
    return "";
  }

  return interpolateTemplate(value, variables);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getHighlightCharacterIndexes(text, phrase) {
  const highlighted = new Set();

  if (!phrase || !text) {
    return highlighted;
  }

  const source = text.toLowerCase();
  const target = phrase.toLowerCase();
  let fromIndex = 0;

  while (fromIndex < source.length) {
    const matchIndex = source.indexOf(target, fromIndex);

    if (matchIndex === -1) {
      break;
    }

    for (let index = matchIndex; index < matchIndex + target.length; index += 1) {
      if (source[index] !== " ") {
        highlighted.add(index);
      }
    }

    fromIndex = matchIndex + target.length;
  }

  return highlighted;
}

function buildHeroMarkup(text, baseDelay, staggerDelay, highlightedIndexes = new Set(), options = {}) {
  const { wordMode = false, highlightPhrase = "" } = options;
  const words = text.split(" ").filter(Boolean);

  if (wordMode) {
    const highlightWords = new Set(
      highlightPhrase
        .toLowerCase()
        .split(" ")
        .map((word) => word.trim())
        .filter(Boolean)
    );

    const wordStagger = Math.max(staggerDelay * 7, 76);

    return words
      .map((word, wordIndex) => {
        const normalizedWord = word.toLowerCase().trim();
        const delay = baseDelay + wordIndex * wordStagger;
        const tokenClass = highlightWords.has(normalizedWord)
          ? "hero-char hero-word-token hero-char-highlight"
          : "hero-char hero-word-token";
        const spaceMarkup = wordIndex < words.length - 1 ? "<span class=\"hero-space-inline\"> </span>" : "";

        return `<span class=\"hero-word\"><span aria-hidden=\"true\" class=\"${tokenClass}\" style=\"--char-delay:${delay}ms\">${escapeHtml(word)}</span>${spaceMarkup}</span>`;
      })
      .join("");
  }

  let charIndex = 0;

  return words
    .map((word, wordIndex) => {
      const charsMarkup = Array.from(word)
        .map((char) => {
          const currentIndex = charIndex;
          const delay = baseDelay + charIndex * staggerDelay;
          const charClass = highlightedIndexes.has(currentIndex)
            ? "hero-char hero-char-highlight"
            : "hero-char";

          charIndex += 1;
          return `<span aria-hidden=\"true\" class=\"${charClass}\" style=\"--char-delay:${delay}ms\">${escapeHtml(char)}</span>`;
        })
        .join("");

      let spaceMarkup = "";
      if (wordIndex < words.length - 1) {
        const spaceDelay = baseDelay + charIndex * staggerDelay;
        charIndex += 1;
        spaceMarkup = `<span aria-hidden=\"true\" class=\"hero-char hero-space\" style=\"--char-delay:${spaceDelay}ms\">&nbsp;</span>`;
      }

      return `<span class=\"hero-word\">${charsMarkup}${spaceMarkup}</span>`;
    })
    .join("");
}

function collectNodeVariables(node) {
  const variables = {};

  if (node.dataset.i18nYear) {
    variables.year = node.dataset.i18nYear;
  }

  return variables;
}

function translateStaticContent(language) {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;

    const translated = t(key, language, collectNodeVariables(node));
    if (translated) {
      node.textContent = translated;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (!key) return;

    const translated = t(key, language);
    if (!translated) return;

    if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement) {
      node.placeholder = translated;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria-label");
    if (!key) return;

    const translated = t(key, language);
    if (translated) {
      node.setAttribute("aria-label", translated);
    }
  });
}

function renderHeroTyping(language) {
  const headlineNode = document.querySelector("[data-hero-headline]");
  const descriptionNode = document.querySelector("[data-hero-description]");

  if (!headlineNode || !descriptionNode) {
    return;
  }

  const headlineKey = headlineNode.getAttribute("data-hero-headline-key") || "";
  const highlightKey = headlineNode.getAttribute("data-hero-highlight-key") || "";
  const descriptionKey = descriptionNode.getAttribute("data-hero-description-key") || "";

  const headlineText = t(headlineKey, language) || headlineNode.getAttribute("aria-label") || "";
  const highlightText = t(highlightKey, language);
  const descriptionText = t(descriptionKey, language) || descriptionNode.getAttribute("aria-label") || "";
  const useWordReveal = RTL_LANGUAGES.includes(language);

  const highlightedIndexes = useWordReveal ? new Set() : getHighlightCharacterIndexes(headlineText, highlightText);
  const headlineMarkup = buildHeroMarkup(headlineText, HEADLINE_START_DELAY_MS, HEADLINE_STAGGER_MS, highlightedIndexes, {
    wordMode: useWordReveal,
    highlightPhrase: highlightText
  });

  const headlineUnitCount = useWordReveal
    ? headlineText.split(" ").filter(Boolean).length
    : Array.from(headlineText).length;
  const headlineDuration = HEADLINE_START_DELAY_MS + headlineUnitCount * (useWordReveal ? Math.max(HEADLINE_STAGGER_MS * 7, 76) : HEADLINE_STAGGER_MS);
  const descriptionStart = headlineDuration + DESCRIPTION_BUFFER_MS;
  const descriptionMarkup = buildHeroMarkup(descriptionText, descriptionStart, DESCRIPTION_STAGGER_MS, new Set(), {
    wordMode: useWordReveal
  });

  headlineNode.setAttribute("aria-label", headlineText);
  descriptionNode.setAttribute("aria-label", descriptionText);

  headlineNode.innerHTML = headlineMarkup;
  descriptionNode.innerHTML = descriptionMarkup;
}

function applyLanguage(language) {
  const safeLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  const isRTL = RTL_LANGUAGES.includes(safeLanguage);

  currentLanguage = safeLanguage;

  document.documentElement.setAttribute("lang", safeLanguage);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  document.body.classList.toggle("is-rtl", isRTL);

  translateStaticContent(safeLanguage);
  renderHeroTyping(safeLanguage);
  updateThemeButtonLabel();
  syncLanguageControls(safeLanguage);
}

function syncLanguageControls(language) {
  const switcher = document.querySelector("[data-language-switcher]");
  if (switcher instanceof HTMLSelectElement) {
    switcher.value = language;
  }

  const currentLanguageLabel = document.querySelector("[data-language-current]");
  if (currentLanguageLabel) {
    currentLanguageLabel.textContent = language.toUpperCase();
  }

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const option = button.getAttribute("data-language-option") || "";
    const isActive = option === language;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function setupLanguageSwitcher() {
  const switcher = document.querySelector("[data-language-switcher]");
  const picker = document.querySelector("[data-language-picker]");
  const toggleButton = picker?.querySelector("[data-language-toggle]");
  const menu = picker?.querySelector("[data-language-menu]");
  const optionButtons = Array.from(document.querySelectorAll("[data-language-option]"));
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const browserLanguage = (navigator.language || "").slice(0, 2).toLowerCase();

  const setMenuOpen = (isOpen) => {
    if (!menu || !toggleButton) {
      return;
    }

    menu.hidden = !isOpen;
    menu.classList.toggle("is-open", isOpen);
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };

  const initialLanguage = SUPPORTED_LANGUAGES.includes(storedLanguage)
    ? storedLanguage
    : SUPPORTED_LANGUAGES.includes(browserLanguage)
      ? browserLanguage
      : DEFAULT_LANGUAGE;

  applyLanguage(initialLanguage);

  if (switcher instanceof HTMLSelectElement) {
    switcher.addEventListener("change", () => {
      const selected = switcher.value;
      const nextLanguage = SUPPORTED_LANGUAGES.includes(selected) ? selected : DEFAULT_LANGUAGE;

      applyLanguage(nextLanguage);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    });
  }

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-language-option") || "";
      const nextLanguage = SUPPORTED_LANGUAGES.includes(selected) ? selected : DEFAULT_LANGUAGE;

      applyLanguage(nextLanguage);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
      setMenuOpen(false);
    });
  });

  if (toggleButton) {
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const expanded = toggleButton.getAttribute("aria-expanded") === "true";
      setMenuOpen(!expanded);
    });
  }

  if (menu) {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  document.addEventListener("click", () => {
    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  window.addEventListener("scroll", () => {
    setMenuOpen(false);
  }, { passive: true });
}

function updateThemeButtonLabel() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  const isDark = document.documentElement.classList.contains("dark");
  const label = isDark ? t("theme.switchToLight") : t("theme.switchToDark");

  toggle.setAttribute("aria-label", label || "");
  toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
}

function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";

  const sunIcon = document.querySelector("[data-theme-icon='sun']");
  const moonIcon = document.querySelector("[data-theme-icon='moon']");

  if (sunIcon && moonIcon) {
    sunIcon.classList.toggle("hidden", isDark);
    moonIcon.classList.toggle("hidden", !isDark);
  }

  updateThemeButtonLabel();
}

function setupTheme(basePath) {
  const toggle = document.querySelector("[data-theme-toggle]");

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;

  applyTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentDark = document.documentElement.classList.contains("dark");
      const nextTheme = currentDark ? "light" : "dark";
      applyTheme(nextTheme);
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    });
  }

  const currentPath = normalizePath(window.location.pathname, basePath);
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("data-nav-link") || "/";
    const active = href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);

    link.classList.toggle("border-[#d8d8d8]", active);
    link.classList.toggle("bg-[#f7f7f7]", active);
    link.classList.toggle("text-[#121212]", active);
    link.classList.toggle("border-transparent", !active);
    link.classList.toggle("text-[#2f2f2f]", !active);
  });
}

function setupLiveClock() {
  const clockNode = document.querySelector("[data-live-clock]");
  if (!clockNode) return;

  const timeZone = clockNode.getAttribute("data-time-zone") || "Asia/Jakarta";
  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone
  });

  const updateClock = () => {
    clockNode.textContent = formatter.format(new Date());
  };

  updateClock();
  window.setInterval(updateClock, 1000);
}

function setupScrollReveal() {
  const targets = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    targets.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  targets.forEach((node) => {
    node.classList.remove("is-visible");
    observer.observe(node);
  });
}

function setupFloatingNav() {
  const nav = document.querySelector("[data-floating-nav]");
  const shell = document.querySelector("[data-floating-nav-shell]");
  if (!nav || !shell) return;

  const triggerNode = document.querySelector("main");
  let threshold = 140;
  let isFloating = false;

  const recalculateThreshold = () => {
    if (triggerNode) {
      threshold = Math.max(96, triggerNode.getBoundingClientRect().top + window.scrollY - 28);
      return;
    }

    threshold = Math.max(96, shell.getBoundingClientRect().top + window.scrollY + 42);
  };

  const updateFloatingState = () => {
    const shouldFloat = window.scrollY > threshold;

    if (shouldFloat === isFloating) {
      return;
    }

    isFloating = shouldFloat;
    nav.classList.toggle("is-floating", shouldFloat);
  };

  nav.classList.remove("is-floating");
  recalculateThreshold();
  updateFloatingState();

  window.addEventListener("scroll", updateFloatingState, { passive: true });
  window.addEventListener("resize", () => {
    recalculateThreshold();
    updateFloatingState();
  });
  window.addEventListener("load", () => {
    recalculateThreshold();
    updateFloatingState();
  });
}

function buildMailto(contactEmail, values) {
  const subjectPrefix = t("contact.form.subjectPrefix") || "Project Inquiry from";
  const subject = `${subjectPrefix} ${values.name || "Website Visitor"}`;

  const body = [
    `${t("contact.form.name")}: ${values.name}`,
    `${t("contact.form.email")}: ${values.email}`,
    `${t("contact.form.projectType")}: ${values.projectType}`,
    `${t("contact.form.budget")}: ${values.budget}`,
    `${t("contact.form.timeline")}: ${values.timeline}`,
    "",
    `${t("contact.form.projectBrief")}:`,
    values.message
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setupInquiryForm() {
  const form = document.querySelector("#inquiry-form");
  if (!form) return;

  const statusNode = document.querySelector("[data-inquiry-status]");
  const resetButton = document.querySelector("[data-reset-inquiry]");
  const contactEmail = form.getAttribute("data-contact-email") || "radurbae@gmail.com";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const getFieldValue = (fieldName) => {
      const field = form.elements.namedItem(fieldName);
      if (!field || !(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
        return "";
      }

      return field.value.trim();
    };

    const values = {
      name: getFieldValue("name"),
      email: getFieldValue("email"),
      projectType: getFieldValue("projectType"),
      budget: getFieldValue("budget"),
      timeline: getFieldValue("timeline"),
      message: getFieldValue("message")
    };

    if (!values.name || !values.email || !values.message) {
      if (statusNode) {
        statusNode.textContent = t("contact.form.statusMissing");
      }
      return;
    }

    window.location.href = buildMailto(contactEmail, values);
    if (statusNode) {
      statusNode.textContent = t("contact.form.statusOpening");
    }
  });

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      form.reset();
      if (statusNode) {
        statusNode.textContent = "";
      }
    });
  }
}

function initializeSite() {
  const basePath = document.body.getAttribute("data-base-url") || "/";
  document.documentElement.classList.add("js-motion-ready");

  setupLanguageSwitcher();
  setupTheme(basePath);
  setupLiveClock();
  setupScrollReveal();
  setupFloatingNav();
  setupInquiryForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSite);
} else {
  initializeSite();
}
