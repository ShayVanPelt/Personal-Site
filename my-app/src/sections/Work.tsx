//import { Timeline } from "@mantine/core";
import { SectionHeader } from "@/components/SectionHeader";
import CircleIcon from "@/assets/icons/circle-white.svg";
import CirclePIcon from "@/assets/icons/circle-purple.svg";

const workExperience = [
  {
    title: "Software Developer Co-op (Python)",
    company: "University of Victoria, Department of Civil Engineering",
    date: "09/2021 - 12/2021",
    info: [
      {
        info: "Created dashboards that display information for graduate students using Dash and React.",
      },
      {
        info: "Used Git version control software to deal with merge conflicts.",
      },
      {
        info: "Created an API that downloaded zips with all data relating to technical information for each country or province.",
      },
    ],
  },
  {
    title: "Full Stack Co-op",
    company: "Certispec Services Inc.",
    date: "01/2024 - 04/2024",
    info: [
      {
        info: "Designed and maintained responsive front-end UIs using Next.js",
      },
      {
        info: "Developed and optimized PostgreSQL queries for data management.",
      },
      {
        info: "Created and modified REST API endpoints to support application features.",
      },
      {
        info: "Implemented new features, resolved bugs, and ensured code quality through comprehensive testing.",
      },
    ],
  },
];

export const WorkSection = () => {
  return (
    <div id="experience" className="pb-32">
      <SectionHeader
        eyebrow="Work Experience"
        title="All software development work experience"
      ></SectionHeader>
      <div className="container">
        <div className="flex md:mt-20 flex-col mt-10 gap-14">
          {workExperience.map((work) => (
            <div key={work.title}>
              <div>
                <h3 className="font-serif text-2xl md:text-4xl ">
                  {work.title}
                </h3>
              </div>
              <hr className="border-t-2 border-white/50 mt-4" />
              <span className="flex items-center mt-4 gap-4">
                {work.date} <CirclePIcon className="size-3" /> {work.company}
              </span>
              <ul className="flex flex-col gap-4 mt-4">
                {work.info.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm md:text-lg text-white/80"
                  >
                    <CircleIcon className="size-3" />
                    <span>{info.info}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
