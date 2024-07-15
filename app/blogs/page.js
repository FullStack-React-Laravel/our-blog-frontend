import AllBlogs from "@/components/blogs/all-blogs";
import Spinner from "@/ui/spinner";

import Image from "next/image";
import { Suspense } from "react";

export const metadata = {
  title: "Blogs",
};

export default function Page() {
  return (
    <>
      <section className="hero relative h-svh">
        <Image
          className="absolute inset-0 size-full object-cover object-center brightness-25"
          src="/images/search-photo.jpg"
          alt="blogs hero section image"
          width={2890}
          height={2118}
          priority
        />
      </section>
      <Suspense fallback={<Spinner />}>
        <AllBlogs />
      </Suspense>
    </>
  );
}
