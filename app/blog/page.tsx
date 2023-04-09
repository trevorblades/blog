import Link from "next/link";
import React from "react";
import fs from "fs/promises";

export default async function BlogPage() {
  const posts = await fs
    .readdir("app/blog/(posts)", { withFileTypes: true })
    .then((files) => files.filter((file) => file.isDirectory()));
  return (
    <div>
      Blog home
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post.name}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
