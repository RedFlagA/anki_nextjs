export async function getDataHome(page: number) {
  const res = await fetch(
    `https://wp.anki.edu.vn/wp-json/wp/v2/posts?per_page=${page}`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getDataBlogs(page: number, offset: number) {
  const res = await fetch(
    `https://wp.anki.edu.vn/wp-json/wp/v2/posts?per_page=${page}&offset=${offset}`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // await wait(100000)
  return res.json();
}

export async function getDetailBlog(slug: string) {
  const res = await fetch(
    `https://wp.anki.edu.vn/wp-json/wp/v2/posts?slug=${slug}`,
    { cache: "no-store", next: { revalidate: 0 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
