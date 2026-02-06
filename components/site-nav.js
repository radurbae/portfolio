"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" }
];

function isLinkActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-1 text-sm text-[#3f3f3f]">
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            isLinkActive(pathname, link.href)
              ? "bg-[#151515] text-white"
              : "text-[#3f3f3f] hover:bg-[#f0efe9] hover:text-[#151515]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
