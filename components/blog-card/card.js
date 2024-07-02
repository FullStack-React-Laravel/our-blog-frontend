import { formatDate } from "@/helper/helper-function";
import Image from "next/image";
import BlogTags from "./tags";
import Link from "next/link";

export default function Card({
  title,
  attachment,
  excerpt,
  slug,
  category,
  created_at,
  user,
  tags,
}) {
  // reduce size of excerpt
  const excerptRender = excerpt.split(" ").slice(0, 10).join(" ");
  // Category & User Name
  const { name: catName } = category;
  const { name: userName } = user;
  const date = formatDate(created_at);

  return (
    <Link
      href={`/blogs/${slug}`}
      className="rounded-xl bg-indigo-950/50 p-4 duration-300 hover:translate-y-[-8px]"
    >
      <div className="relative h-52 overflow-hidden rounded-xl">
        <Image
          className="absolute left-0 top-0 h-full w-full object-cover"
          alt={title}
          src={attachment}
          width={640}
          height={480}
        />

        <span className="absolute bottom-3 left-2 rounded-md bg-indigo-950/50 px-2 py-1 text-sm text-gray-300">
          {catName}
        </span>
      </div>
      <div className="mt-4 flex h-64 flex-col">
        <BlogTags tags={tags} />
        <div className="h-16 text-xl text-gray-300"> {title}</div>
        <div className="h-16 text-gray-400">{excerptRender}...</div>
        <UserCard user={userName} createdAt={date} />
      </div>
    </Link>
  );
}

function UserCard({ user, createdAt }) {
  return (
    <div className="flex h-16 items-center gap-4">
      <div className="gradientAnim h-10 w-10 rounded-full"></div>
      <div className="text-sm text-white">
        <p className="font-bold">{user}</p>
        <time>{createdAt}</time>
      </div>
    </div>
  );
}
