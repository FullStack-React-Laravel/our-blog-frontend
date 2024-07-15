import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/helper/helper-function";

export default function CreatedBy({
  name,
  username,
  avatar,
  createdAt,
  sizeUserImage = "size-12",
  textSize = "text-sm",
}) {
  return (
    <div className="flex h-16 items-center gap-4">
      <div className={`${sizeUserImage} gradientAnim rounded-full p-1`}>
        <Image
          className="rounded-full"
          src={avatar}
          width={150}
          height={150}
          alt={avatar}
          priority
        />
      </div>
      <div className={`${textSize} text-white`}>
        <Link href={`/user/${username}`} className="block font-bold">
          {name}
        </Link>
        <time className="text-gray-400">{createdAt}</time>
      </div>
    </div>
  );
}
