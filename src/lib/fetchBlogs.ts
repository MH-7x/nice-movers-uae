import { Blog } from "../../types/Blogs";

export const revalidate = 60

export async function fetchAllBlogs(): Promise<Blog[]> {
  const res = await fetch(`${process.env.CMS_URI}/api/list-all`, {
    next : {
      revalidate : 60
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
    const data = await res.json();
    if (!data.success) {
        throw new Error('Failed to fetch blogs');
    }
    return data.data as Blog[];
}
