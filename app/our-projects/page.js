import HeroSection from "@/components/our-projects/hero-section";
// import NavSection from "@/components/our-projects/nav-section";
import SearchSection from "@/components/our-projects/search-section";
import ProjectsSection from "@/components/our-projects/projects-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <section className="min-h-screen">
        <header className="overflow-auto bg-indigo-50/5 py-6 shadow">
          <div className="our-container flex items-center justify-between">
            {/* <NavSection /> */}
            <SearchSection />
          </div>
        </header>

        <ProjectsSection />
      </section>
    </>
  );
}
