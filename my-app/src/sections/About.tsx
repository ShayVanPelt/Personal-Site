import { HiDownload } from "react-icons/hi";
import { Card } from "@/components/Card";


import JavascriptIcon from "@/assets/icons/tech/javascript-plain.svg";
import TypescriptIcon from "@/assets/icons/tech/typescript-plain.svg";
import ReactIcon from "@/assets/icons/tech/react.svg";
import NexrtjsIcon from "@/assets/icons/tech/nextjs-plain.svg";
import CIcon from "@/assets/icons/tech/c-plain.svg";
import CSharpIcon from "@/assets/icons/tech/csharp-plain.svg";
import PythonIcon from "@/assets/icons/tech/python-plain.svg";
import JavaIcon from "@/assets/icons/tech/java.svg";
import PostIcon from "@/assets/icons/tech/postgresql-plain.svg";
import SQLiteIcon from "@/assets/icons/tech/sqlite-plain.svg";
import TailwindIcon from "@/assets/icons/tech/tailwindcss-original.svg";
import GitIcon from "@/assets/icons/tech/git-plain.svg";
import DockerIcon from "@/assets/icons/tech/docker-plain.svg";
import UnityIcon from "@/assets/icons/tech/unity-original.svg";
import { ToolboxItems } from "@/components/Toolboxitems";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: JavascriptIcon,
  },
  {
    title: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Next.js',
    icon: NexrtjsIcon,
  },
  {
    title: 'C',
    icon: CIcon,
  },
  {
    title: 'C#',
    icon: CSharpIcon,
  },
  {
    title: 'Python',
    icon: PythonIcon,
  },
  {
    title: 'Java',
    icon: JavaIcon,
  },
  {
    title: 'SQLite',
    icon: SQLiteIcon,
  },
  {
    title: 'PostgreSQL',
    icon: PostIcon,
  },
  {
    title: 'Tailwind',
    icon: TailwindIcon,
  },
  {
    title: 'Git',
    icon: GitIcon,
  },
  {
    title: 'Docker',
    icon: DockerIcon,
  },
  {
    title: 'Unity',
    icon: UnityIcon,
  },

]

export const AboutSection = () => {
  return (
  <div id="home" className="py-32 md:py-48 lg:py-60">
    <div className="container">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-2 tracking-wide">
          Shay Van Pelt 
        </h1>
        <p className="mt-4 text-center md:text-md lg:text-lg text-white/80">
          Hi there! I’m a fourth-year Software Engineering student at the University of Victoria. 
          With a passion for problem-solving and innovation, I specialize in software development, data analysis, and system design.
        </p>
        <div className="mt-8">
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 justify-center bg-purple-600 text-white text-sm md:text-base py-2 px-5 rounded-lg shadow hover:bg-purple-800 transition-all"
        >
           Download Resume {" "}
           <HiDownload />
        </a>
        </div>
      </div>
      <div className="py-20" >
          <Card className="h-[320px] p-0">
            <CardHeader title="My Toolbox" description="technical skills I am familialr with" className="flex items-center px-6 pt-6">
            </CardHeader>
            <div>
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6"></ToolboxItems>
              <ToolboxItems toolboxItems={toolboxItems} className="mt-6"></ToolboxItems>
            </div>
          </Card>
        </div>
    </div>
  </div>
  )
};


