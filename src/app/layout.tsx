import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "BODUMEX DOO — Veleprodaja i maloprodaja mesa",
    template: "%s — BODUMEX DOO",
  },
  description:
    "BODUMEX DOO Beograd — veleprodaja i maloprodaja svežeg junećeg, telećeg, svinjskog i jagnjećeg mesa. Dostava na kućnu adresu. Od 1992. godine.",
  keywords: [
    "BODUMEX",
    "meso Beograd",
    "veleprodaja mesa",
    "maloprodaja mesa",
    "dostava mesa",
    "klanica Stara Pazova",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
