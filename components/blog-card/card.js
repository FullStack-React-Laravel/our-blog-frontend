import { formatDate } from "@/helper/helper-function";
import Image from "next/image";
import BlogTags from "./tags";
import Link from "next/link";
import Btn from "@/ui/Btn";

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
  // Category & Username
  const { name: catName } = category;

  const date = formatDate(created_at);

  return (
    <div className="group rounded-xl bg-indigo-950/50 p-4 duration-300 hover:translate-y-[-8px]">
      <div className="relative h-52 overflow-hidden rounded-xl">
        <Image
          className="absolute left-0 top-0 h-full w-full object-cover brightness-90 duration-300 group-hover:brightness-100 group-hover:scale-125 group-hover:-rotate-6"
          alt={title}
          src={attachment}
          width={640}
          height={480}
        />

        <Link
          href={`/blogs?category=${category.slug}`}
          className="absolute bottom-3 left-2 rounded-md bg-indigo-950/50 px-2 py-1 text-sm text-gray-300"
        >
          {catName}
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <BlogTags tags={tags} />
        <Link href={`/blogs/${slug}`} className="h-14 py-px text-xl text-gray-300 flex items-center">
          <span className="line-2">{title}</span>
        </Link>
        <div className="text-justify line-2 text-gray-400">{excerpt}</div>
        <div className="flex justify-between items-center">
          <UserCard {...user} createdAt={date} />

          <Btn>
            <span className="text-sm">View More</span>
          </Btn>
        </div>
      </div>
    </div>
  );
}

function UserCard({ name, username, avatar, createdAt }) {
  return (
    <div className="flex h-16 items-center gap-4">
      <div className="gradientAnim h-10 w-10 rounded-full overflow-hidden">
        <Image src={avatar} width={150} height={150} alt={avatar} priority />
      </div>
      <div className="text-sm text-white">
        <Link href={`/user/${username}`} className="block font-bold">{name}</Link>
        <time className="text-gray-400">{createdAt}</time>
      </div>
    </div>
  );
}
