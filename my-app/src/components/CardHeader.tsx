import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-md text-white/80 mt-2">{description}</p>
    </div>
  );
};
