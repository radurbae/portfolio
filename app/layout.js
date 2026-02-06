import Link from "next/link";
import SiteNav from "@/components/site-nav";
import LiveClock from "@/components/live-clock";
import "./globals.css";

const TIMEZONE_LABEL = process.env.PORTFOLIO_TIMEZONE_LABEL || "Asia/Jakarta";
const TIMEZONE_NAME = process.env.PORTFOLIO_TIMEZONE_NAME || "Asia/Jakarta";
const LINKEDIN_URL = process.env.PORTFOLIO_LINKEDIN || "https://linkedin.com";
const DRIBBBLE_URL = process.env.PORTFOLIO_DRIBBBLE || "https://dribbble.com";
const INSTAGRAM_URL = process.env.PORTFOLIO_INSTAGRAM || "https://instagram.com";

export const metadata = {
  title: {
    default: "Rads Dev",
    template: "%s | Rads Dev"
  },
  description: "Brand, web, software, and mobile portfolio."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#151515] antialiased">
        <div className="dot-bg min-h-screen">
          <header className="mx-auto w-full max-w-[1240px] px-4 pt-6 md:px-8 md:pt-8">
            <div className="flex items-center justify-between text-sm text-[#4b4b4b]">
              <span>{TIMEZONE_LABEL}</span>
              <LiveClock timeZone={TIMEZONE_NAME} />
            </div>
            <div className="mt-5 flex items-center justify-center">
              <div className="rounded-full border border-[#d7d7d7] bg-white/95 px-2 py-1 shadow-[0_8px_16px_rgba(0,0,0,0.06)] backdrop-blur">
                <SiteNav />
              </div>
            </div>
          </header>

          <main className="mx-auto w-full max-w-[1240px] px-4 pb-16 pt-10 md:px-8 md:pt-14">
            {children}
          </main>

          <footer className="mx-auto mt-6 flex w-full max-w-[1240px] flex-col items-start justify-between gap-3 border-t border-[#dbdbdb] px-4 py-6 text-xs text-[#4c4c4c] sm:flex-row sm:items-center md:px-8">
            <p>© {new Date().getFullYear()} Raditya Adyatma. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/about" className="transition-colors hover:text-[#151515]">
                About
              </Link>
              <Link href="/work" className="transition-colors hover:text-[#151515]">
                Work
              </Link>
              <Link href="/contact" className="transition-colors hover:text-[#151515]">
                Contact
              </Link>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#151515]">
                LinkedIn
              </a>
              <a href={DRIBBBLE_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#151515]">
                Dribbble
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#151515]">
                Instagram
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
