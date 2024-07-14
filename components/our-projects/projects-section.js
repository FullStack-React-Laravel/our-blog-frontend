import Image from "next/image";
import Link from "next/link";

import Btn from "@/ui/Btn";
import Tags from "@/components/blogs/tags";

function UserSmall({ avatar, name, username }) {
  return (
    <div className="group/user relative">
      <Link
        href={`/users/${username}`}
        className="gradientAnim relative block size-10 overflow-hidden rounded-full p-0.5"
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

      <div className="sectionGra absolute -top-2 left-1/2 hidden -translate-x-1/2 -translate-y-full text-nowrap rounded-full border border-indigo-800 px-2 py-0.5 text-sm font-bold group-hover/user:block">
        <span className="textG capitalize">{name}</span>
      </div>
    </div>
  );
}

function CreatedByUsers({ users }) {
  return (
    <div className="sectionGra absolute bottom-0 left-1/2 -mb-2 flex -translate-x-1/2 translate-y-full items-center gap-2 rounded-full px-3 py-1 shadow-lg ring-2 delay-500 duration-500 group-hover:my-2 group-hover:translate-y-0">
      <span className="textG text-nowrap font-bold">Created By</span>

      <div className="flex items-center -space-x-4">
        {users.map((user, index) => (
          <UserSmall key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

function InfoCard({ tags, title, excerpt, slug }) {
  return (
    <div className="-mt-2 mb-2 flex flex-col gap-4 rounded-b-lg border border-t-0 border-indigo-50/10 bg-indigo-50/5 p-4 duration-500 group-hover:my-0 group-hover:bg-indigo-50/10">
      <Tags tags={tags} />

      <Link href={`/our-projects/${slug}`}>
        <h3 className="textG text-2xl font-bold">{title}</h3>
      </Link>

      <p className="text-md line-2 text-indigo-300">{excerpt}</p>

      <Btn href={`/our-projects/${slug}`}>More Details</Btn>
    </div>
  );
}

function ImageCard({ users, slug, attachment }) {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-indigo-800 duration-500 group-hover:-mx-2.5">
      <CreatedByUsers users={users} />
      <Link
        href={`/our-projects/${slug}`}
        className="block h-[45vw] md:h-56 lg:h-72"
      >
        <Image
          width={1908}
          height={6421}
          src={attachment}
          alt={`project-image-${slug}`}
          className="max-h-full overflow-clip object-cover object-top delay-300 duration-[5s] ease-linear group-hover:object-bottom"
        />
      </Link>
    </div>
  );
}

export default function ProjectsSection() {
  const card = {
    title: "Nusuj Company",
    slug: "nusuj-company",
    excerpt:
      "Nusuj is a portfolio website I created for a real estate company based in Saudi Arabia, showcasing its services to potential clients.",
    attachment: "/images/test/3.webp",
    tags: [
      { name: "frontend", color: "#18f117", slug: "" },
      {
        name: "react",
        color: "#18fff1",
        slug: "",
      },
      { name: "tailwindcss", color: "#ff18ff", slug: "" },
    ],
    users: [
      {
        name: "mohamed atef",
        avatar: "https://i.pravatar.cc/150?img=2",
        username: "mohamed-atef",
      },
    ],
  };

  return (
    <section className="our-container grid gap-8 py-4 text-white md:grid-cols-2">
      {new Array(10).fill(null).map((item, index) => (
        <article key={index} className="group">
          <ImageCard
            {...card}
            users={new Array((index % 5) + 1).fill(card.users[0])}
          />
          <InfoCard {...card} />
        </article>
      ))}
    </section>
  );
}
