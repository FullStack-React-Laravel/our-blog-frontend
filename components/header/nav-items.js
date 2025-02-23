import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHeader } from "@/context/header-context";

export default function NavItems({ screen }) {
  const { handleShowNavbar, showNavbar } = useHeader();
  const pathname = usePathname();

  const navLinks = [
    { link: "/", name: "home" },
    { link: "/blogs", name: "blogs" },
    { link: "/comps", name: "components" },
    { link: "/website-themes", name: "themes" },
    { link: "/our-projects", name: "our projects" },
    { link: "/#team", name: "our team" },
  ];

  const mobileNavItems = navLinks.map(({ link, name }) => {
    const ativeCurPath =
      pathname === link || (link !== "/" && pathname.startsWith(link));
    return (
      <li key={name}>
        <Link
          href={link}
          onClick={() => handleShowNavbar()}
          className={`rounded-xl px-2 py-1 capitalize duration-500 ${ativeCurPath ? "sectionGra" : ""}`}
        >
          <span className={`font-bold ${ativeCurPath ? "textG" : ""}`}>
            {name}
          </span>
        </Link>
      </li>
    );
  });

  const descktopNavItems = navLinks.map(({ link, name }) => {
    const ativeCurPath =
      pathname === link || (link !== "/" && pathname.startsWith(link));
    return (
      <li key={name}>
        <Link
          href={link}
          className={`rounded-xl px-2 py-1 capitalize duration-500 ${ativeCurPath ? "sectionGra" : ""} `}
        >
          <span className={`font-bold ${ativeCurPath ? "textG" : ""}`}>
            {name}
          </span>
        </Link>
      </li>
    );
  });

  if (screen === "mobile") {
    return (
      <nav
        className={`mt-2 block overflow-hidden rounded-lg transition-all duration-300 md:hidden ${showNavbar ? "h-56" : "h-0"}`}
      >
        <ul className="flex w-full flex-col gap-2 bg-[#000436]/60 px-4 py-6 backdrop-blur">
          {mobileNavItems}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="hidden md:block">
      <ul className="flex w-full flex-col gap-2 px-4 md:flex-row">
        {descktopNavItems}
      </ul>
    </nav>
  );
}
