import { auth } from "@/lib/auth";
import Navbar from "./navbar";

export default async function Header() {
  const session = await auth();

  return (
    <header className="our-container fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 py-6 text-white">
      <Navbar session={session} />
    </header>
  );
}
