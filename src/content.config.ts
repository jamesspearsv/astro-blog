// import astro:content utilities
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// import collection loader
import { glob } from "astro/loaders";

// define Posts collection
const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./blog-content/posts",
  }),
  schema: z.object({
    published: z.boolean(),
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
  }),
});

const albums = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./photo-albums",
  }),
  schema: z.object({
    src: z.string(),
    description: z.string().nullable(),
    name: z.string().nullable(),
    cover: z.string().nullable(),
    images: z.array(z.string()),
  }),
});

export const collections = { posts, albums };
