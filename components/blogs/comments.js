import Image from "next/image";
import { formatDateDistance, testComments } from "@/helper/helper-function";
import {
  BiSolidQuoteLeft,
  BiSolidQuoteRight,
  BiSolidLike,
} from "react-icons/bi";
import AddComment from "./add-comment";

export default function Comments() {
  const comments = testComments;

  return (
    <div className="mt-8 text-white">
      <p className="mb-8 text-2xl">Comments ({comments.length})</p>
      {comments.map((comment) => (
        <Comment key={comment.user} {...comment} />
      ))}
      <AddComment />
    </div>
  );
}

function Comment({ user, attachment, message, likes, created_at }) {
  return (
    <div className="mb-8 border-gray-700 pb-8" key={user}>
      <div className="flex items-start gap-4">
        <div className="gradientAnim shrink-0 basis-10 rounded-full p-1">
          <Image
            className="rounded-full"
            src={attachment}
            width={150}
            height={150}
            alt={user}
            priority
          />
        </div>
        <div>
          <div className="mb-4 flex items-center gap-2">
            <p>{user}</p>
            <span className="mt-1 block size-1 rounded-full bg-gray-400"></span>
            <span className="text-xs text-gray-400">
              {formatDateDistance(created_at)}
            </span>
          </div>
          <div>
            <p className="max-w-lg text-sm text-gray-400 md:text-base">
              <BiSolidQuoteLeft className="mr-1 inline align-baseline text-xs" />
              {message}
              <BiSolidQuoteRight className="ml-1 inline align-baseline text-xs" />
            </p>
          </div>
          <div className="group mt-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-primary-800 px-3 py-1 text-sm">
            <BiSolidLike className="transition-all duration-300 group-hover:-rotate-12 group-hover:scale-150" />
            {likes}
          </div>
        </div>
      </div>
    </div>
  );
}
