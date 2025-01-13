export const SectionHeader = ({
    title,
    eyebrow,
    description,
} : {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return(
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-600 to-pink-200 text-center bg-clip-text text-transparent">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
                {title}
            </h2>
            <p className="text-center md:text-lg lg:text-xl text-white/80 mt-4 max-w-md mx-auto">
                {description}
            </p>
        </>
    )
}