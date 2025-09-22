import "./globals.css";
export const metadata = {
  title: "VinceProNet — Conception de site web",
  description: "Conception de site web modernes pour commerces locaux et entrepreneurs.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
