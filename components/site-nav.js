"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const THEME_STORAGE_KEY = "portfolio-theme";

const LINKS = [
  { href: "/", label: "Home", icon: HomeIcon, iconOnly: true },
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/work", label: "Services", icon: ServicesIcon },
  { href: "/contact", label: "Contact Us", icon: ContactIcon }
];

function isLinkActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;

    applyTheme(initialTheme);
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <nav className="flex items-center rounded-full border border-[#d7d7d7] bg-white/95 px-1.5 py-1 shadow-[0_8px_16px_rgba(0,0,0,0.06)] backdrop-blur">
      <div className="flex items-center gap-1">
        {LINKS.map((link) => {
          const Icon = link.icon;
          const active = isLinkActive(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className={`inline-flex items-center rounded-full border text-sm transition-colors ${
                link.iconOnly ? "h-9 w-9 justify-center px-0" : "gap-2 px-3 py-1.5"
              } ${
                active
                  ? "border-[#d8d8d8] bg-[#f7f7f7] text-[#121212]"
                  : "border-transparent text-[#2f2f2f] hover:bg-[#f3f3f3]"
              }`}
            >
              <Icon />
              {link.iconOnly ? null : <span>{link.label}</span>}
            </Link>
          );
        })}
      </div>
      <span className="mx-1 h-6 w-px bg-[#e1e1e1]" />
      <button
        type="button"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={theme === "dark"}
        onClick={handleThemeToggle}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#2f2f2f] transition-colors hover:bg-[#f3f3f3]"
      >
        {mounted && theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    </nav>
  );
}

function applyTheme(nextTheme) {
  const root = document.documentElement;
  const isDark = nextTheme === "dark";

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 10.7 12 4l8 6.7v8.3A1 1 0 0 1 19 20h-4.5a.5.5 0 0 1-.5-.5V15h-4v4.5a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="8" cy="10" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.3 16.5h11.2l-3.5-3.9-2.8 2.7-1.5-1.4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10h8M8 14h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="9" cy="7.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2.8v2.1M12 19.1v2.1M2.8 12h2.1M19.1 12h2.1M5.4 5.4l1.5 1.5M17.1 17.1l1.5 1.5M18.6 5.4l-1.5 1.5M6.9 17.1l-1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M15.7 3.6a8.6 8.6 0 1 0 4.7 15.8A9.1 9.1 0 0 1 15.7 3.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
