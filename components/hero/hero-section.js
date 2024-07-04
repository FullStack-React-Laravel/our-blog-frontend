import XYAnim from "@/anim/xy-anim";
import HeroImage from "./hero-image";

import Btn from "@/ui/Btn";

export default function HeroSection() {
  return (
    <section className="relative grid min-h-[500px] h-screen place-content-center">
      <HeroImage />
      <div className="relative max-w-6xl px-4 text-white">
        <XYAnim>
          <h1 className={`mb-5 text-3xl font-[900] md:text-8xl`}>
            Welcome <span className="textG">to our blog!!</span>
          </h1>
        </XYAnim>
        <XYAnim
          delay={0.3}
          classes="max-w-96 md:max-w-2xl text-gray-400 md:text-xl mb-10 text-justify"
        >
          <p>
            Here, you&#39;ll find the latest gadget reviews, tech news, how-to
            guides, problem-solving articles, and more fun things. Our goal is
            to make tech accessible and exciting for everyone.
          </p>
        </XYAnim>
        <XYAnim delay={0.6}>
          <Btn url="#latest">See Latest!</Btn>
        </XYAnim>
      </div>
    </section>
  );
}
