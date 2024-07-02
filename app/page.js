import HeroSection from "@/components/hero/hero-section";
import LatestSection from "@/components/latest/latest-section";
import About from "@/components/about/about";
import Spinner from "@/ui/spinner";

import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={<Spinner height="min-h-screen" />}>
        <LatestSection />
      </Suspense>
      <About />
    </main>
  );
}
