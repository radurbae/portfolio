export const BASE_URL = import.meta.env.BASE_URL || "/";

export function toPage(path = "/") {
  const base = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;

  if (path === "/") {
    return base;
  }

  const normalized = path.replace(/^\/+|\/+$/g, "");
  return `${base}${normalized}/`;
}

export function normalizePath(pathname = "/", baseUrl = BASE_URL) {
  if (!pathname) {
    return "/";
  }

  const cleanBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  let normalized = pathname;

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
