const API_URL_Blogs = "https://our-blog-eg-api.vercel.app/posts";

export async function getLatestBlogs() {
  try {
    const response = await fetch(`${API_URL_Blogs}/latest`);
    if (!response.ok) {
      throw new Error(`Can't fetching Blogs`);
    }
    const blogs = await response.json();
    return blogs;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}

export async function getAllBlogs() {
  try {
    const response = await fetch(`${API_URL_Blogs}`);
    if (!response.ok) {
      throw new Error(`Can't fetching Blogs`);
    }
    const blogs = await response.json();
    return blogs;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}

export async function getBlog(slug) {
  try {
    const response = await fetch(`${API_URL_Blogs}/${slug}`);

    if (!response.ok) {
      throw new Error(`Can't fetching blog`);
    }
    const blog = await response.json();
    return blog;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
