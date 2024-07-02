export async function getBlogs() {
  const API_URL =
    process.env.BLOG_API_URL || "https://our-blog-eg-api.vercel.app/posts";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Can't fetching data`);
    }
    const blogs = await response.json();
    return blogs;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
