import Link from "next/link";
import React from "react";
import fs from "fs/promises";

export default async function BlogPage() {
  const posts = await fs
    .readdir("app/blog/(posts)", { withFileTypes: true })
    .then((files) => files.filter((file) => file.isDirectory()))
    .then(async (files) =>
      Promise.all(
        files.map(async (file) => {
          const { metadata } = await import(`./(posts)/${file.name}/page.mdx`);
          return {
            slug: file.name,
            metadata,
          };
        })
      )
    );

  return (
    <div>
      Blog home
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
