import Image from "next/image";
import { Fragment } from "react";

export default function HeroImage() {
  return (
    <Fragment>
      <Image
        width={3840}
        height={2160}
        alt="hero section image"
        src="/images/hero-image.jpg"
        priority
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-[#00000091]"></div>
    </Fragment>
  );
}
