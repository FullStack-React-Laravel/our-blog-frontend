const API_URL_Blogs = "https://our-blog-eg-api.vercel.app/posts";

export async function getBlogsData({ latest = false, slug = "" }) {
  let url = API_URL_Blogs;
  if (latest) url = `${url}/latest`;
  if (slug) url = `${url}/${slug}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Can't Fetch Data`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
