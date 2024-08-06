import { useHeader } from "@/context/header-context";
import Image from "next/image";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";

export default function UserInfo({ session }) {
  const { handleShowUserAdmin, showUserAdmin } = useHeader();
  const { name, image } = session?.user;

  return (
    <div className="ml-auto flex items-center gap-2">
      <NotificationButton />
      <button
        onClick={handleShowUserAdmin.bind(null)}
        className={
          "sectionGra flex items-center justify-center rounded-full p-0.5 pr-2"
        }
      >
        <div className="gradientAnim size-10 overflow-hidden rounded-full p-1">
          <Image
            src={image}
            className="rounded-full"
            alt="user_avatar"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="textG hidden px-2 font-bold md:block">{name}</div>
        <span
          className={`size-6 p-0.5 text-xl duration-300 ${showUserAdmin && "rotate-180"}`}
          aria-label={showUserAdmin ? "Collapse" : "Expand"}
        >
          <IoIosArrowDown />
        </span>
      </button>
    </div>
  );
}

function NotificationButton() {
  return (
    <button>
      <div className="hover:sectionGra relative rounded-full p-1.5">
        <IoIosNotifications className="text-3xl" />
        <div className="absolute right-2 top-2 size-3 animate-ping rounded-full bg-indigo-500"></div>
        <div className="absolute right-2 top-2 size-3 rounded-full bg-indigo-500"></div>
      </div>
    </button>
  );
}
