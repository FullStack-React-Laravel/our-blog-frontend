import { getBlog } from "@/blogs/blogs-api";
import Error from "@/ui/error";

export default async function BlogPage({ params: { slug } }) {
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
  const blogRender = blog.data;

  return <section className="min-h-screen py-20">{blogRender.title}</section>;
}
