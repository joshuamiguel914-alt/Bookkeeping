import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Master Guide to Bookkeeping & Accounting",
  description: "A friendly, structured path through bookkeeping and accounting fundamentals, from first entries to year-end reporting.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <footer className="site-footer">
            <span>Made for curious minds and balanced books.</span>
            <span>Educational material · Philippine context</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
