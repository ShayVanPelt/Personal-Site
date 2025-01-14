import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({ toolboxItems, className,}: {
        toolboxItems: {
        title: string;
        icon: React.ElementType;
        }[];
        className?: string;
    }) => {
        return(
            <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
                <div className="flex flex-none py-0.5 gap-6">
                    {toolboxItems.map((item) => (
                        <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/20 rounded-lg">
                            <TechIcon component={item.icon} />
                            <span className="font-semibold ">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
}