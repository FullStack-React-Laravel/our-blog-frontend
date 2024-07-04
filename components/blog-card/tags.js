import Link from "next/link";

export default function Tags({ tags }) {
  const tagsRender = tags.slice(0, 3);

  return (
    <div className="flex flex-wrap py-1 items-start gap-2">
      {tagsRender.map((tag) => (
        <Tag key={tag.slug} {...tag} />
      ))}

      {tags.length > 3 &&
        <span className="block rounded-lg bg-indigo-950/80 px-4 py-[2px] text-indigo-600">+{tags.length - 3}</span>}
    </div>
  );
}

function Tag({ name, color, slug }) {
  return (
    <Link
      href={`/blogs/?tags=${slug}`}
      style={{ color }}
      className="block rounded-lg bg-indigo-950/80 px-4 py-[2px]"
    >
      {name}
    </Link>
  );
}
