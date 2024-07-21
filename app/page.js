import HeroSection from "@/components/hero/hero-section";
import LatestSection from "@/components/latest/latest-section";
import Team from "@/components/our-team/team";
import Spinner from "@/ui/spinner";

import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<Spinner height="min-h-screen" />}>
        <LatestSection />
      </Suspense>
      <Team />
    </>
  );
}
