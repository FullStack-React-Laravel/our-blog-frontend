import Image from "next/image";

// ========== social icon ==========
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function TeamMember({ name, img, position, social }) {
  return (
    <div className="flex flex-col items-center">
      <div className="gradientAnim relative mb-6 max-w-36 rounded-full p-2 md:max-w-44">
        <Image className="relative rounded-full" src={img} alt={name} />
      </div>
      <p className="mb-2 text-2xl capitalize text-gray-200 md:text-4xl">
        {name}
      </p>
      <span className="mb-2 block text-sm capitalize text-gray-300 md:text-base">
        {position}
      </span>
      <TeamSoical {...social} />
    </div>
  );
}

function TeamSoical({ linked, github, leetcode }) {
  // ================== Style classes ==================
  const styleLink = "group relative overflow-hidden";
  const styleColorIcon =
    "absolute left-0 top-0 translate-y-[110%] rotate-45 transition-all duration-300 group-hover:translate-y-0 group-hover:rotate-0";
  const styleGrayIcon =
    "text-gray-400 transition-all duration-300 group-hover:scale-0";

  // ================== Jsx ==================
  return (
    <div className="mt-2 flex items-center gap-3 text-2xl md:gap-4 md:text-3xl">
      <a href={linked} target="_blank" className={styleLink}>
        <IoLogoLinkedin className={`${styleColorIcon} text-blue-500`} />
        <IoLogoLinkedin className={styleGrayIcon} />
      </a>

      <a href={github} target="_blank" className={styleLink}>
        <FaGithub className={`${styleColorIcon} text-gray-200`} />
        <FaGithub className={styleGrayIcon} />
      </a>

      <a href={leetcode} target="_blank" className={styleLink}>
        <SiLeetcode className={`${styleColorIcon} text-yellow-600`} />
        <SiLeetcode className={styleGrayIcon} />
      </a>
    </div>
  );
}
