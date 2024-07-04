'use client';

import Image from "next/image";
import {Fragment, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {createPortal} from "react-dom";

export default function HeaderSection() {
	const [onTop, setOnTop] = useState(true)
	const [navButtonActive, setNavButtonActive] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			const {scrollY} = window;

			setOnTop(scrollY < 300);
		};

		return () => {
			window.onscroll = null;
		};
	}, [onTop]);

	return (
		<header
			id="header"
			className={
				"our-container z-10 top-0 left-1/2 -translate-x-1/2 text-white w-full py-6 " +
				(onTop ? "absolute" : "fixed")
			}
		>
			<div
				className={
					"relative flex justify-between items-center gap-8 " +
					(!onTop && "backdrop-blur bg-indigo-50/5 py-2.5 px-4 rounded-full border border-indigo-50/10")
				}
			>
				<div className="flex items-center gap-3">
					<NavButton active={navButtonActive} onClick={() => setNavButtonActive(!navButtonActive)}/>
					<HeaderLogo className={"aspect-square " + (onTop ? "h-12" : "h-8")}/>
				</div>

				<NavSection className="grow justify-self-start hidden md:block"/>

				<div className="flex items-center gap-2">
					<NotificationButton/>
					<UserDropdown onTop={onTop}/>
				</div>
			</div>

			<NavSection
				className={"mt-2 rounded-lg border-indigo-50/10 overflow-hidden duration-500 " + (navButtonActive ? "h-48 border" : "h-0")}
				classList={
					"flex-col w-full backdrop-blur bg-indigo-50/5  px-4 py-6"
				}
			/>
		</header>
	);
}

function NavButton({onClick, active}) {
	return (
		<button
			onClick={onClick}
			className={
				"group flex flex-col justify-around size-10 p-2.5 gap-1 md:hidden hover:sectionGra rounded-full " +
				(active && "sectionGra")
			}>
			<span className="size-full my-px bg-white rounded-full"></span>
			<span className="size-full my-px bg-white rounded-full"></span>
			<span className="size-full my-px bg-white rounded-full"></span>
		</button>
	);
}

function HeaderLogo({className}) {
	return (
		<div className={className}>
			<Fragment>
				<Image
					width={512}
					height={512}
					alt="logo"
					src="/images/icon.png"
					priority
					className="size-full object-cover"
				/>
			</Fragment>
		</div>
	);
}

function NavSection({className, classList}) {
	const pathname = usePathname();

	const navLinks = [
		{link: "/", name: "home"},
		{link: "/blogs", name: "blog"},
		{link: "/components", name: "components"},
		{link: "/themes", name: "themes"},
		{link: "/our-projects", name: "our projects"},
	]

	return (
		<nav className={className}>
			<ul className={"flex gap-2 " + classList}>
				{navLinks.map(({link, name}) => (
					<li key={name}>
						<Link href={link}
						      className={"capitalize px-2 py-1 rounded-xl hover:sectionGra duration-500 " + (pathname === link && "sectionGra")}>
							<span className={"font-bold " + (pathname === link && "textG")}>{name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

function UserDropdown({onTop}) {
	const [active, setActive] = useState(false)

	return (
		<div className="relative">
			<button onClick={() => setActive(!active)}
			        className={"flex justify-center items-center sectionGra rounded-full p-0.5 pr-2"}>
				<div className="size-10 rounded-full overflow-hidden">
					<Image src="https://i.pravatar.cc/150?img=2" alt="user_avatar" width={150} height={150} priority/>
				</div>

				<div className="hidden md:block px-2 textG font-bold">
					Jon Doe
				</div>

				<div className={"size-6 p-px duration-300 " + (active && "rotate-180")}>
					<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
					     xmlns="http://www.w3.org/2000/svg">
						<path
							d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
					</svg>
				</div>
			</button>

			{createPortal(
				<div
					className={
						"our-container fixed z-10 right-1/2 translate-x-1/2 overflow-hidden transition-height duration-500 " +
						(onTop ? "top-20" : "top-24 pt-1") + " " +
						(active ? "h-52" : "h-0")
					}
				>
					<div className={
						"backdrop-blur bg-indigo-50/5 rounded-lg border border-indigo-50/10 text-white py-6 px-4 max-w-sm ml-auto"
					}>
						<div className="flex items-center border-b border-b-indigo-50/10 pb-3">
							<div className="size-16 rounded-full overflow-hidden">
								<Image src="https://i.pravatar.cc/150?img=2" alt="user_avatar" width={150} height={150} priority/>
							</div>

							<div className="px-2">
								<div className="flex gap-2 items-center">
									<div className="textG font-bold">Jon Doe</div>
									<div className="text-xs text-whhite/50 sectionGra px-2 py-1 rounded-full">
										Admin
									</div>
								</div>
								<div className="text-xs text-white/50">@Jon-Doe</div>
							</div>
						</div>

						<div className="flex flex-col gap-1 items-start font-bold capitalize w-full pt-2">
							{["settings", "logout"].map((key) => (
								<Link key={key} href={"/" + key} className="hover:sectionGra px-2 py-1 rounded-xl">{key}</Link>
							))}
						</div>
					</div>
				</div>,
				document.body
			)}
		</div>
	);
}

function NotificationButton() {
	return (
		<button>
			<div className="relative size-10 p-1.5 hover:sectionGra rounded-full">
				<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
				     xmlns="http://www.w3.org/2000/svg">
					<path
						d="M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"></path>
				</svg>

				<div className="animate-ping absolute top-2 right-2 size-3 rounded-full bg-indigo-500"></div>
				<div className="absolute top-2 right-2 size-3 rounded-full bg-indigo-500"></div>
			</div>
		</button>
	);
}