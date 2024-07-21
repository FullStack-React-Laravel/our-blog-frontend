import { team } from "./team-api";

import TeamMember from "./team-member";

export default function Team() {
  return (
    <section className="py-24" id="team">
      <div className="our-container">
        <div className="mb-16 text-center text-4xl capitalize text-white md:mb-24 md:text-7xl">
          Meet our professional <span className="textG font-bold">team!!</span>
        </div>

        <div className="m-auto flex max-w-5xl flex-col flex-wrap items-center justify-center gap-16 md:flex-row md:gap-24">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
