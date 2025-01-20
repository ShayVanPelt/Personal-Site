import botimage from "@/assets/images/bot.png";
import mapimage from "@/assets/images/map.png";
import DRimage from "@/assets/images/dr.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import CircleIcon from "@/assets/icons/circle-white.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { Result } from "postcss";

const portfolioProjects = [
  {
    title: "AWS Deep Racer",
    info: [
      { info: "Developed and trained reinforcement learning models" },
      { info: "Created custom reward fucntion" },
      { info: "Competed against other students" },
    ],
    link: "https://github.com/ShayVanPelt/DeepRacer",
    image: DRimage,
  },
  {
    title: "Ottawa Amenities Map",
    info: [
      { info: "Python file that combines two datasets from Ottawa" },
      { info: "Shows average cost of housing in different neighborhoods" },
      { info: "Filter by proximity to amenities" },
    ],
    link: "https://github.com/ShayVanPelt/Ottawa-Map-Data",
    image: mapimage,
  },
  {
    title: "Discord Bot",
    info: [
      { info: "Discord bot developed with discord.py and SQLite" },
      { info: "Implemented games include roulette, blackjack and coinflip" },
      {
        info: "Updates each users currency after each call and stores in database",
      },
    ],
    link: "https://github.com/ShayVanPelt/Discord-Bot",
    image: botimage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-48">
      <div className="container">
        <div className="flex justify-center">
          <h1
            className="font-serif text-3xl mt-6 font-semibold tracking-widest 
          bg-gradient-to-r from-purple-600 to-pink-200 text-transparent bg-clip-text md:text-5xl lg:text-6xl"
          >
            Personal Projects
          </h1>
        </div>
        <p className="text-center text-white/80 mt-4 md:text-2xl max-w-md mx-auto">
          List of personal projects completed
        </p>
        <div className="flex md:mt-20 flex-col mt-10 gap-14">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-neutral-700 rounded-3xl lg:px-20 lg:pt-16  z-0 overflow-hidden 
            after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
            after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`, // Ensure this is interpolated correctly
              }}
            >
              <div>
                <h3 className="font-serif text-2xl md:text-4xl ">
                  {project.title}
                </h3>
              </div>
              <hr className="border-t-2 border-white/50 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.info.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-lg text-white/80"
                  >
                    <CircleIcon className="size-3" />
                    <span>{info.info}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white h-12 w-full font-semibold md:text-lg rounded-xl text-purple-800 hover:bg-white/65 hover:text-purple-900 hover:scale-105 transition-all inline-flex items-center justify-center gap-2 mt-8">
                  <span>View on Github</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </a>
              <div className="flex justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
