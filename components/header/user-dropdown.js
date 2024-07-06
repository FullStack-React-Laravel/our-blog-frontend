import Image from "next/image";
import Link from "next/link";

export default function UserDropdown({ showUserAdmin }) {
  return (
    <div className="relative">
      <div
        className={`our-container fixed right-0 top-24 z-10 overflow-hidden transition-all duration-500 ${showUserAdmin ? "h-52" : "h-0"} `}
      >
        <div
          className={
            "ml-auto max-w-sm rounded-lg border border-indigo-50/10 bg-indigo-50/5 px-4 py-6 text-white backdrop-blur"
          }
        >
          <div className="flex items-center border-b border-b-indigo-50/10 pb-3">
            <div className="size-16 overflow-hidden rounded-full">
              <Image
                src="https://i.pravatar.cc/150?img=2"
                alt="user_avatar"
                width={150}
                height={150}
                priority
              />
            </div>

            <div className="px-2">
              <div className="flex items-center gap-2">
                <div className="textG font-bold">Jon Doe</div>
                <div className="text-whhite/50 sectionGra rounded-full px-2 py-1 text-xs">
                  Admin
                </div>
              </div>
              <div className="text-xs text-white/50">@Jon-Doe</div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-1 pt-2 font-bold capitalize">
            {["settings", "logout"].map((key) => (
              <Link
                key={key}
                href={"/" + key}
                className="hover:sectionGra rounded-xl px-2 py-1"
              >
                {key}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
