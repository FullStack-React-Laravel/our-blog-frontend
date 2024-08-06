import { LuSearchX } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="mt-auto flex h-full flex-col items-center pt-12">
      <LuSearchX className="moveUpRotate mb-4 text-8xl text-gray-200 md:text-9xl" />
      <div className="mb-2 text-2xl text-gray-50 md:mb-3 md:text-4xl">
        <span className="textG text-3xl font-bold md:text-5xl">Whoops</span>, no
        matches !!
      </div>
      <p className="text-center text-gray-400 md:text-xl">
        we couldn&apos;t find any search results. <br /> Give it another go
      </p>
    </div>
  );
}
