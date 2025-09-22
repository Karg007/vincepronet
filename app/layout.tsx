import "./globals.css";
export const metadata = {
  title: "VinceProNet — Site vitrine",
  description: "Sites vitrines modernes pour commerces locaux et entrepreneurs.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}
