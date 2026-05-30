export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl px-1 ${alignClass}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3 text-balance">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-balance text-stone-400 leading-relaxed md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
};
