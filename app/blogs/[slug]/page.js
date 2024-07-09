import { getBlog } from "@/blogs/blogs-api";
import { formatDate } from "@/helper/helper-function";

import CreatedBy from "@/components/blogs/created-by";
import Tags from "@/components/blogs/tags";
import Error from "@/ui/error";
import Image from "next/image";
import Comments from "@/components/blogs/comments";

export default async function Page({ params: { slug } }) {
  let blog;
  let error = null;

  try {
    blog = await getBlog(slug);
  } catch (err) {
    error = err.message;
  }
  if (error) {
    return <Error height="min-h-screen" errorMessage={error} />;
  }
  const { title, attachment, created_at, user, tags, content } = blog.data;
  const date = formatDate(created_at);

  return (
    <section className="min-h-screen py-40">
      <div className="m-auto max-w-3xl px-5">
        <h1 className="mb-10 text-3xl text-white md:text-5xl">{title}</h1>
        <CreatedBy
          textSize="text-base"
          sizeUserImage="size-14"
          createdAt={date}
          {...user}
        />
        <div className="mb-4 mt-6 overflow-hidden rounded-xl">
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
        <div className="mt-10 text-justify text-xl italic text-gray-300 md:text-3xl">
          {content}
        </div>
        <Comments />
      </div>
    </section>
  );
}
