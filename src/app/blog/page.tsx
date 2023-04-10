import Link from "next/link";
import React from "react";
import { readdir } from "fs/promises";

export default async function BlogPage() {
  const nodes = await readdir("src/app/blog/(posts)", { withFileTypes: true });
  const files = nodes.filter((node) => node.isDirectory());
  const posts = await Promise.all(
    files.map(async (file) => {
      const { metadata } = await import(`./(posts)/${file.name}/page.mdx`);
      return {
        slug: file.name,
        metadata,
      };
    })
  );

  return (
    <div>
      <h1 className="text-lg">Blog home</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
