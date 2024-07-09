import { testComments } from "@/helper/helper-function";
import Image from "next/image";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

export default function Comments() {
  const comments = testComments;
  return (
    <div className="mt-8 text-white">
      <p className="mb-8 text-2xl">Comments ({comments.length})</p>
      {comments.map(({ user, attachment, comment }) => (
        <div className="mb-8 border-b border-gray-700 pb-8" key={user}>
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
              <p>{user}</p>
              <div>
                <p className="text-sm text-gray-400 md:text-base">
                  <BiSolidQuoteLeft className="mr-1 inline align-baseline text-xs" />
                  {comment}
                  <BiSolidQuoteRight className="ml-1 inline align-baseline text-xs" />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
