import { getBlogs } from "@/blogs/blogs-api";
import Error from "@/ui/error";

export default async function BlogPage({ params: { slug } }) {
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

  const singleBlog = blogs.find((b) => b.slug == slug);

  if (!singleBlog)
    return (
      <div className="h-screen text-center text-3xl text-gray-300">
        Not found
      </div>
    );

  return (
    <section className="min-h-screen py-20 text-center text-3xl text-gray-300">
      {singleBlog.title}
    </section>
  );
}
