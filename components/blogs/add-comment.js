"use client";
import Btn from "@/ui/Btn";

export default function AddComment() {
  function handleFun(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleFun} className="rounded-lg py-4">
      <label
        htmlFor="comment"
        className="mb-4 block text-sm font-medium text-gray-200"
      >
        Add a Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        className="mt-1 min-h-36 w-full rounded-md border border-gray-300 bg-transparent p-2 outline-none transition-all duration-300 focus:ring-4 focus:ring-indigo-600"
        placeholder="Write your comment here..."
      ></textarea>
      <div className="mt-3">
        <Btn textSize="text-base" classes=" ml-auto">
          SEND
        </Btn>
      </div>
    </form>
  );
}
