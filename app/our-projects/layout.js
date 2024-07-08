import HeroSection from "@/components/our-projects/hero-section";
import NavSection from "@/components/our-projects/nav-section";
import SearchSection from "@/components/our-projects/search-section";

export default function OurProjectsLayout({children}) {
	return (
		<section className="sectionGra min-h-screen text-white">
			<HeroSection/>

			<section>
				<header className="bg-indigo-50/5 py-6 shadow overflow-auto">
					<div className="our-container flex justify-between items-center">
						<NavSection />
						<SearchSection />
					</div>
				</header>

				<section className="our-container h-40 grid place-items-center">
					{children}
				</section>
			</section>
		</section>
	);
}
