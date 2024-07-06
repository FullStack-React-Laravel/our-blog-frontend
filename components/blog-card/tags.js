import Link from "next/link";

export default function Tags({ tags }) {
  const tagsRender = tags.slice(0, 3);
  let moreTags;

  if (tags.length > 3)
    moreTags = (
      <span className="block rounded-lg bg-indigo-950/80 px-4 py-[2px] text-indigo-600">
        +{tags.length - 3}
      </span>
    );

  return (
    <div className="flex flex-wrap items-start gap-2 py-1">
      {tagsRender.map((tag) => (
        <Tag key={tag.slug} {...tag} />
      ))}
      {moreTags}
    </div>
  );
}

function Tag({ name, color, slug }) {
  return (
    <Link
      href={`/blogs/?tag=${slug}`}
      style={{ color }}
      className="block rounded-lg bg-indigo-950/80 px-4 py-[2px]"
    >
      {name}
    </Link>
  );
}
