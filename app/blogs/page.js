import XYAnim from "@/anim/xy-anim";
import AllBlogs from "@/components/blogs/all-blogs";
import Search from "@/components/search";
import Spinner from "@/ui/spinner";

import Image from "next/image";
import { Suspense } from "react";

import searchImage from "@/public/images/search-photo.jpg";

export const metadata = {
  title: "Blogs",
};

export default function Page({ searchParams }) {
  return (
    <>
      <section className="hero relative grid h-svh place-content-center">
        <Image
          className="absolute inset-0 size-full object-cover object-center brightness-25"
          src={searchImage}
          alt="blogs hero section image"
          placeholder="blur"
          priority
        />
        <div className="relative px-4 pt-12">
          <XYAnim
            delay={0.9}
            classes="mb-4 text-3xl font-bold text-gray-100 md:mb-8 md:text-7xl"
          >
            what are you <span className="textG">looking for ?</span>
          </XYAnim>
          <XYAnim delay={1.3} classes="m-auto w-4/5">
            <Search />
          </XYAnim>
        </div>
      </section>
      <Suspense fallback={<Spinner />}>
        <AllBlogs />
      </Suspense>
    </>
  );
}
