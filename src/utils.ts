import { getCollection } from "astro:content";

export async function getPosts() {
  const posts = await getCollection("posts");
  return posts.filter((post) => post.data.published);
}
