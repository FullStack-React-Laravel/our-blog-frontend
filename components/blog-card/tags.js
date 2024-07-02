export default function Tags({ tags }) {
  return (
    <div className="flex h-16 flex-wrap items-start gap-2">
      {tags.map((tag) => (
        <Tag key={tag.slug} {...tag} />
      ))}
    </div>
  );
}

function Tag({ name, color }) {
  const tagRender = name.split(" ").slice(0, 1).join(" ");
  return (
    <span
      style={{ color }}
      className="block rounded-lg bg-indigo-950/80 px-4 py-[2px]"
    >
      {tagRender}
    </span>
  );
}
