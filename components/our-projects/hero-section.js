'use client';

import Image from "next/image";
import XYAnim from "@/anim/xy-anim";
import {useEffect, useState} from "react";

export default function HeroSection() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setTimeout(() => setMounted(true), 100);
	}, [mounted]);

	return (
		<header className={"relative border-b-4 border-indigo-800 duration-1000 " + (mounted ? "md:h-96 h-60" : "h-svh")}>
			<Image
				className={
					"gradientAnim brightness-25 size-full object-cover duration-1000 border-b " +
					(mounted ? "object-top blur-[2px]" : "object-bottom")
				}
				src="/images/our-projects-hero-image.png"
				alt="hero section image"
				width={2890}
				height={2118}
				priority
			/>

			<div className={"absolute inset-0 mx-auto pt-20 grid place-items-center"}>
				<XYAnim delay={1.1}>
					<h1 className="pb-10 textG text-3xl font-bold md:text-8xl">
						Our Projects
					</h1>
				</XYAnim>
			</div>
		</header>
	);
}