//import { Timeline } from "@mantine/core";
import { SectionHeader } from "@/components/SectionHeader";
import CircleIcon from "@/assets/icons/circle-white.svg";
import CirclePIcon from "@/assets/icons/circle-purple.svg";

const workExperience = [
  {
    title: "Full Stack Co-op",
    company: "Certispec Services Inc.",
    date: "01/2025 - 04/2025",
    info: [
      {
        info: "Designed responsive front-end user interfaces with Next.js.",
      },
      {
        info: "Managed application states using Zustand, hooks and local states.",
      },
      {
        info: "Optimized API endpoints through implementation of pagination for large datasets.",
      },
      {
        info: "Developed complex queries for PostgreSQL databases, leveraging JSONB for efficient data storage and retrieval.",
      },
      {
        info: "Developed and secured REST API endpoints using OAuth token handling and validation.",
      },
      {
        info: "Resolved bugs, implemented front-end components, and developed backend features to complete project tickets efficiently.",
      },
    ],
  },
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
];

export const WorkSection = () => {
  return (
    <div id="experience" className="pb-48">
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
                    <CircleIcon className="size-3 flex-shrink-0" />
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
