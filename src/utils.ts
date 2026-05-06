import { getCollection } from "astro:content";

export async function getPosts(tag?: string) {
  const posts = (await getCollection("posts")).filter((post) =>
    tag
      ? post.data.published && post.data.tags.includes(tag)
      : post.data.published,
  );

  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export async function getAvailableTags() {
  const posts = await getPosts();

  // Parse tags from post frontmatters
  const tags: string[] = [];
  for (const post of posts) {
    for (const tag of post.data.tags) {
      if (!tags.includes(tag)) tags.push(tag);
    }
  }

  return tags;
}
