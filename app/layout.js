import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],

  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "HackerLife",
  description:
    "welcome to our HackerLife blog where we post every thing about tech...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} sectionGra select-none`}>
        {children}
      </body>
    </html>
  );
}
