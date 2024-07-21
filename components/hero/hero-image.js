import Image from "next/image";
import { Fragment } from "react";
import hero from "@/public/images/hero-image.jpg";

export default function HeroImage() {
  return (
    <Fragment>
      <Image
        alt="hero section image"
        src={hero}
        priority
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-[#00000091]"></div>
    </Fragment>
  );
}
