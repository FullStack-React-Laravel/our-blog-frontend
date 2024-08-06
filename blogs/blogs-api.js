export async function getBlogsData({
  latest = false,
  slug = "",
  searchQuery = "",
}) {
  let url = process.env.API_URL_Blogs;

  if (latest) url = `${url}/latest`;
  else if (slug) url = `${url}/${slug}`;
  else if (searchQuery) url = `${url}/search?query=${searchQuery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Data not found (404)");
      } else {
        throw new Error("Failed to fetch data");
      }
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
