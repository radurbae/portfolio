import "./globals.css";

export const metadata = {
  title: "Portfolio Layout",
  description: "Portfolio website built with Next.js and Tailwind CSS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e5e4df] text-[#151515] antialiased">
        {children}
      </body>
    </html>
  );
}
