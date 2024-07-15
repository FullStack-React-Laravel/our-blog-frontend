import { BiSearch } from "react-icons/bi";

export default function SearchSection() {
  return (
    <div className="relative ml-auto text-white">
      <input
        className="sectionGra rounded-full px-4 py-1 outline-none focus:outline-indigo-800"
        placeholder="search ..."
      />

      <button className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <BiSearch />
      </button>
    </div>
  );
}
