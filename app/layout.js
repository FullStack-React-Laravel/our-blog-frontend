import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { HeaderProvider } from "@/context/header-context";

const lato = Lato({
  subsets: ["latin"],

  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: {
    template: "HackerLife | %s",
    default: "Welcome To HackerLife",
  },
  description:
    "welcome to our HackerLife blog where we post every thing about tech...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} sectionGra`}>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <main>{children}</main>
      </body>
    </html>
  );
}
