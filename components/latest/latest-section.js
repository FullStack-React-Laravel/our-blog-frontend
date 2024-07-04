import { getBlogs } from "@/blogs/blogs-api";

import Error from "@/ui/error";
import Card from "../blog-card/card";

export default async function LatestSection() {
  let blogs;
  let error = null;

  try {
    blogs = await getBlogs();
  } catch (err) {
    error = err.message;
  }
  if (error) {
    return <Error height="min-h-screen" errorMessage={error} />;
  }

  const blogsRender = blogs.data;

  return (
    <section id="latest" className="py-20">
      <div className="our-container">
        <div className="mb-10 text-center text-4xl text-white md:mb-20 md:text-7xl">
          Latest <span className="textG font-[900]">blogs</span>
        </div>
        <div className="grid-cols-card grid gap-8">
          {blogsRender.map((blog) => (
            <Card key={blog.slug} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
