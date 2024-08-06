import { useHeader } from "@/context/header-context";
import { signOutAction } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

// ============= icons =================
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

export default function UserDropdown({ session }) {
  const { showUserAdmin } = useHeader();

  if (!session) return null;

  const { name, image } = session.user;
  return (
    <div className="relative">
      <div
        className={`our-container fixed right-0 top-24 z-10 overflow-hidden transition-all duration-500 ${showUserAdmin ? "h-52" : "h-0"} `}
      >
        <div
          className={
            "ml-auto max-w-sm rounded-lg border border-indigo-50/10 bg-[#000436]/60 px-4 py-6 text-white backdrop-blur"
          }
        >
          <div className="flex items-center border-b border-b-indigo-50/10 pb-3">
            <div className="gradientAnim size-16 overflow-hidden rounded-full p-1">
              <Image
                className="rounded-full"
                src={image}
                alt="user_avatar"
                width={150}
                height={150}
                priority
              />
            </div>

            <div className="px-2">
              <div className="flex items-center gap-2">
                <div className="textG font-bold">{name}</div>
                <div className="text-whhite/50 sectionGra rounded-full px-2 py-1 text-xs">
                  Admin
                </div>
              </div>
              <div className="text-xs text-white/50">@Jon-Doe</div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-3 pt-4 font-bold capitalize">
            <Link className="flex items-center gap-2" href="/user/settings">
              <IoMdSettings className="text-2xl" />
              settings
            </Link>
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex items-center gap-2 capitalize">
        <IoMdLogOut className="text-2xl" />
        log out
      </button>
    </form>
  );
}
