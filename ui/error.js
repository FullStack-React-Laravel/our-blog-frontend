import Image from "next/image";

export default function Error({ errorMessage, height = "min-h-96" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 ${height}`}
    >
      <Image
        width={512}
        height={512}
        alt="error image"
        src="/images/error-icon.png"
        priority
        className="rotate-anim w-20 md:w-40"
      />
      <span className="text-gray-400 md:text-2xl">{errorMessage}</span>
    </div>
  );
}
