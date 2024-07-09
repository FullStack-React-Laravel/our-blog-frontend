import { formatDate } from "@/helper/helper-function";
import Image from "next/image";
import Tags from "./tags";
import Link from "next/link";
import Btn from "@/ui/Btn";
import CreatedBy from "./created-by";

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
          className="absolute left-0 top-0 h-full w-full object-cover brightness-90 duration-300 group-hover:-rotate-6 group-hover:scale-125 group-hover:brightness-100"
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
        <Tags tags={tags} />
        <Link
          href={`/blogs/${slug}`}
          className="flex h-14 items-center py-px text-xl text-gray-300"
        >
          <span className="line-2">{title}</span>
        </Link>
        <div className="line-2 text-justify text-gray-400">{excerpt}</div>
        <div className="flex items-center justify-between">
          <CreatedBy {...user} createdAt={date} />
          <Btn textSize="text-sm md:text-xl" link={`/blogs/${slug}`}>
            Read More
          </Btn>
        </div>
      </div>
    </div>
  );
}
