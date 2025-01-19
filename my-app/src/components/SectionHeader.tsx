export const SectionHeader = ({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p
          className="font-serif text-3xl mt-6 font-semibold tracking-widest 
          bg-gradient-to-r from-purple-600 to-pink-200 text-transparent bg-clip-text md:text-5xl lg:text-6xl"
        >
          {eyebrow}
        </p>
      </div>
      <h2 className="text-center text-white/80 mt-4 md:text-2xl  max-w-md mx-auto">
        {title}
      </h2>
    </>
  );
};
