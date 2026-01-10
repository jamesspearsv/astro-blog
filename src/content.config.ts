// import astro:content utilities
import { defineCollection, z } from "astro:content";

// import collection loader
import { glob } from "astro/loaders";

// define Posts collection
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog-content" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
  }),
});

export const collections = { posts };
