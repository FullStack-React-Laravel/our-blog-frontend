import Image from "next/image";
import XYAnim from "@/anim/xy-anim";

import OurProjectHeroImage from "@/public/images/our-projects-hero-image.png";

export default function HeroSection() {
  return (
    <header className="hero relative h-svh border-b-4 border-indigo-800">
      <Image
        className="gradientAnim hero-image absolute inset-0 size-full border-b object-cover object-bottom brightness-25"
        src={OurProjectHeroImage}
        alt="our project hero section image"
        priority
      />
      <div className="absolute inset-0 grid place-items-center pt-20">
        <XYAnim delay={1.5}>
          <h1 className="pb-10 text-3xl font-bold text-white md:text-8xl">
            Our <span className="textG">Projects</span>
          </h1>
        </XYAnim>
      </div>
    </header>
  );
}
