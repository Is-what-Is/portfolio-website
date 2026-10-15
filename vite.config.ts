import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { defineConfig } from "vite";

// BASE_PATH is "/" locally and "/portfolio-website/" on GitHub Pages.
// Maths in MDX ($...$ and $$...$$) is rendered to HTML at build time by KaTeX.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    tailwindcss(),
    mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    reactRouter(),
  ],
});
