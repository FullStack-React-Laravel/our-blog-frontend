'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavSection({ className }) {
	const pathname = usePathname();

	const navLinks = [
		{link: "/our-projects/latest", name: "latest"},
		{link: "/our-projects/working-on", name: "working on"},
	];

	return (
		<ul className={"flex text-base gap-2 text-nowrap " + className}>
			{navLinks.map(({link, name}) => (
				<li key={name}>
					<Link
						href={link}
						className={`rounded-xl px-2 py-1 capitalize duration-500 ${pathname == link && "sectionGra"}`}
					>
                <span className={`font-bold ${pathname == link && "textG"}`}>
                  {name}
                </span>
					</Link>
				</li>
			))}
		</ul>
	);
}