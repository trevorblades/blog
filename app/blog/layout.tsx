import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>test</header>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}
