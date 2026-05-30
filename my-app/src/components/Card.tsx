import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={twMerge("card-surface p-6", className)}>{children}</div>
  );
};
