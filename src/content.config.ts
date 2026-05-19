// import astro:content utilities
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// import collection loader
import { glob } from "astro/loaders";

// define Posts collection
const posts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./content-collections/blog-content/posts",
  }),
  schema: z.object({
    published: z.boolean(),
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
  }),
});

// define Albums collection
const albums = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./content-collections/portfolio-albums",
  }),
  schema: z.object({
    images: z.array(z.string()),
  }),
});

export const collections = { posts, albums };
