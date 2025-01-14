# Personal-Site

packaje.json
"name": "portfolio-site-2",
  "version": "0.1.0",
  "private": true,

  html {
    scroll-behavior: smooth;
  }

  className="scroll-smooth"

  
  export const AboutSection = () => {
  return (
  <div id="home" className="py-32 md:py-48 lg:py-60">
    <div className="Container">
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-2 tracking-wide">
          Shay Van Pelt 
        </h1>
        <p className="mt-4 text-center md:text-md lg:text-lg text-white/80">
        Hi there! I’m a fourth-year Software Engineering student at the University of Victoria. 
        With a passion for problem-solving and innovation, I specialize in software development, data analysis, and system design.
        </p>
      </div>
    </div>
  </div>
  )
};

<>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]"/>
            
                <svg className="size-0 absolute">
                    <linearGradient id="tech-icon-gradient">
                        <stop offset="0%" stopColor="rgb(147 51 234)"/>
                        <stop offset="100%" stopColor="rgb(251 207 232)"/> 
                    </linearGradient>
                </svg>
        </>

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