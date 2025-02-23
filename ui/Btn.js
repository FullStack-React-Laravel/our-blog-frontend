import Link from "next/link";

export default function Btn({
  children,
  areaLabel,
  url,
  link,
  textSize = "text-xl",
  classes = "",
}) {
  const effectStyle =
    "left-1/2 h-[200px] w-[200px] translate-x-[-50%] rounded-full group-hover/btn:translate-y-[40%] absolute bottom-0 left-0 block bg-purple-950 transition-all duration-500 translate-y-[110%]";
  const btnStyle = `group/btn relative block text-white w-32 overflow-hidden rounded-lg bg-purple-700 py-2 text-center  md:w-40 ${textSize} ${classes}`;

  if (link) {
    return (
      <Link href={link} className={btnStyle}>
        <span className={effectStyle}></span>
        <span className="relative">{children}</span>
      </Link>
    );
  } else if (url) {
    return (
      <a href={url} className={btnStyle} role="button" aria-label={areaLabel}>
        <span className={effectStyle}></span>
        <span className="relative">{children}</span>
      </a>
    );
  } else {
    return (
      <button className={btnStyle}>
        <span className={effectStyle}></span>
        <span className="relative">{children}</span>
      </button>
    );
  }
}
