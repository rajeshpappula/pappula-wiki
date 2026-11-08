import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pappula Wiki — A name. A place. A community.",
    template: "%s | Pappula Wiki",
  },
  description:
    "A source-led guide to the Pappula community and its roots in Pappulavaripalem.",
  applicationName: "Pappula Wiki",
  openGraph: {
    title: "Pappula Wiki",
    description:
      "A source-led guide to the Pappula community and its roots in Pappulavaripalem.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
