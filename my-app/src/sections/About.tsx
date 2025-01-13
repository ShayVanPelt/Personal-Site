import { HiDownload } from "react-icons/hi";
import { Card } from "@/components/Card";

export const AboutSection = () => {
  return (
  <div id="home" className="py-32 md:py-48 lg:py-60">
    <div className="Container ">
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
          className="inline-flex items-center gap-2 justify-center bg-indigo-500 text-white text-sm md:text-base py-2 px-5 rounded-lg shadow hover:bg-indigo-600 transition-all"
        >
           Download Resume {" "}
           <HiDownload />
        </a>
        </div>
      </div>
        <div className="flex justify-center ">
          <Card>
            <p>stuff inside in threoy</p>
          </Card>
        </div>
    </div>
  </div>
  )
};


