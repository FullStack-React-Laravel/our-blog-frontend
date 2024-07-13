import Image from "next/image";
import Link from "next/link";

import Btn from "@/ui/Btn";
import Tags from "@/components/blogs/tags";

function UserSmall({avatar, name, username}) {
	return (
		<div className="relative group/user">
			<Link
				href={`/users/${username}`}
				className="block relative gradientAnim size-10 overflow-hidden rounded-full p-0.5"
			>
				<Image
					src={avatar}
					className="rounded-full"
					alt="user_avatar"
					width={150}
					height={150}
					priority
				/>
			</Link>

			<div
				className="hidden absolute px-2 py-0.5 font-bold -top-2 -translate-y-full text-nowrap left-1/2 -translate-x-1/2 sectionGra rounded-full text-sm border border-indigo-800 group-hover/user:block"
			>
				<span className="textG capitalize">{name}</span>
			</div>
		</div>
	);
}

function CreatedByUsers({users}) {
	return (
		<div
			className="absolute bottom-0 left-1/2 -translate-x-1/2 sectionGra flex items-center px-3 py-1 gap-2 ring-2 shadow-lg rounded-full delay-500 duration-500 translate-y-full -mb-2 group-hover:my-2 group-hover:translate-y-0"
		>
			<span className="textG font-bold text-nowrap">Created By</span>

			<div className="flex items-center -space-x-4">
				{users.map((user, index) => (<UserSmall key={index} {...user}/>))}
			</div>
		</div>
	);
}

function InfoCard({tags, title, excerpt, slug}) {
	return (
		<div
			className="flex flex-col gap-4 bg-indigo-50/5 duration-500 group-hover:bg-indigo-50/10 p-4 rounded-b-lg border border-indigo-50/10 border-t-0 -mt-2 mb-2 group-hover:my-0"
		>
			<Tags tags={tags}/>

			<Link href={`/our-projects/${slug}`}>
				<h3 className="textG font-bold text-2xl">{title}</h3>
			</Link>

			<p className="text-md text-indigo-300 line-2">
				{excerpt}
			</p>

			<Btn href={`/our-projects/${slug}`}>More Details</Btn>
		</div>
	);
}

function ImageCard({users, slug, attachment}) {
	return (
		<div className="relative border-2 border-indigo-800 rounded-lg overflow-hidden duration-500 group-hover:-mx-2.5">
			<CreatedByUsers users={users}/>
			<Link href={`/our-projects/${slug}`} className="block h-[45vw] md:h-56 lg:h-72">
				<Image
					width={1908}
					height={6421}
					src={attachment}
					alt={`project-image-${slug}`}
					className="max-h-full overflow-clip object-cover object-top delay-300 duration-[5s] ease-linear group-hover:object-bottom"
				/>
			</Link>
		</div>);
}

export default function ProjectsSection() {
	const card = {
		title: "Nusuj Company",
		slug: "nusuj-company",
		excerpt: "Nusuj is a portfolio website I created for a real estate company based in Saudi Arabia, showcasing its services to potential clients.",
		attachment: "/images/test/3.webp",
		tags: [{name: "frontend", color: "#18f117", slug: ""}, {
			name: "react",
			color: "#18fff1",
			slug: ""
		}, {name: "tailwindcss", color: "#ff18ff", slug: ""},],
		users: [{
			name: "mohamed atef", avatar: "https://i.pravatar.cc/150?img=2", username: "mohamed-atef"
		}]
	}

	return (<section className="our-container text-white py-4 grid gap-8 md:grid-cols-2">
		{(new Array(10).fill(null)).map((item, index) => (<article key={index} className="group">
			<ImageCard {...card} users={new Array((index % 5) + 1).fill(card.users[0])}/>
			<InfoCard {...card}/>
		</article>))}
	</section>)
}