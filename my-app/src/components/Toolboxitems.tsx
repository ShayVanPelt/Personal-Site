import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({
  toolboxItems,
  className,
  itemWrapperClassName,
}: {
  toolboxItems: {
    title: string;
    icon: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-4 pr-4",
          itemWrapperClassName
        )}
      >
        {toolboxItems.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="inline-flex items-center gap-3 rounded-xl border border-surface-border bg-stone-900/50 px-3 py-2"
          >
            <TechIcon component={item.icon} />
            <span className="text-sm font-medium text-stone-300">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
