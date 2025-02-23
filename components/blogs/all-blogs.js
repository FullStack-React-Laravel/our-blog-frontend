import CreatedBy from "./created-by";
import Tags from "./tags";
import Image from "next/image";

import { getBlogsData } from "@/blogs/blogs-api";
import { formatDate } from "@/helper/helper-function";
import Link from "next/link";
import NotFound from "../not-found";

export default async function AllBlogs({ searchQuery }) {
  const data = await getBlogsData({ searchQuery });
  const blogs = data?.data;

  if (blogs.length == 0) return <NotFound />;

  return (
    <div className="m-auto min-h-screen max-w-3xl px-5 pt-20 text-white">
      {blogs.map((blog) => (
        <Blog key={blog.slug} {...blog} />
      ))}
    </div>
  );
}

function Blog({
  slug,
  title,
  attachment,
  excerpt,
  created_at,
  user,
  date,
  tags,
}) {
  const createdAt = formatDate(created_at);

  return (
    <div className="mb-20">
      <CreatedBy createdAt={createdAt} {...user} />
      <Link
        href={`/blogs/${slug}`}
        className="mt-2 block text-xl text-white md:mt-3 md:text-3xl"
      >
        {title}
      </Link>
      <div className="my-4 overflow-hidden rounded-xl md:my-6">
        <Image
          src={attachment}
          width={640}
          height={480}
          priority
          alt={title}
          className="w-full"
        />
      </div>
      <Tags tags={tags} renderAll={true} />
      <div className="mt-4 text-justify text-gray-300 md:text-2xl">
        {excerpt}
      </div>
    </div>
  );
}
