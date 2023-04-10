import React from "react";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <main className="grow">{children}</main>
      <aside className="w-1/3 border-l pl-4">table of contents</aside>
    </div>
  );
}
