export default function Btn({ children, areaLabel, url }) {
  const effectStyle =
    "absolute bottom-0 left-0 block bg-purple-950 transition-all duration-500 translate-y-[110%]";
  return (
    <a
      href={url}
      className="group/btns relative block w-32 overflow-hidden rounded-lg bg-purple-700 py-2 text-center text-xl md:w-40 md:text-2xl"
      role="button"
      aria-label={areaLabel}
    >
      <span
        className={`left-1/2 h-[200px] w-[200px] translate-x-[-50%] rounded-full group-hover/btns:translate-y-[40%] ${effectStyle}`}
      ></span>

      <span className="relative">{children}</span>
    </a>
  );
}
