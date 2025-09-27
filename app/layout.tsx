import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VinceProNet",
  description: "Sites modernes pour commerces locaux et entrepreneurs.",
  icons: {
    icon: [
      { url: "/logo-vpn.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-vpn.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/logo-vpn.png" }],
    shortcut: ["/logo-vpn.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
