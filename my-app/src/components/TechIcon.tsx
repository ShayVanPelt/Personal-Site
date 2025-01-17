export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(147 51 234)" />
            <stop offset="100%" stopColor="rgb(251 207 232)" />
          </linearGradient>
        </defs>
      </svg>
      <Component className="size-10" fill="url(#tech-icon-gradient)" />
    </>
  );
};
