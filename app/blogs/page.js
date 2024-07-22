import AllBlogs from "@/components/blogs/all-blogs";
import HeroBlogs from "@/components/blogs/hero-blogs";
import Spinner from "@/ui/spinner";

import { Suspense } from "react";

export const metadata = {
  title: "Blogs",
};

export default function Page({ searchParams }) {
  const { query: searchQuery } = searchParams;

  return (
    <section className="min-h-screen">
      <HeroBlogs />
      <Suspense key={searchQuery} fallback={<Spinner />}>
        <AllBlogs searchQuery={searchQuery} />
      </Suspense>
    </section>
  );
}
