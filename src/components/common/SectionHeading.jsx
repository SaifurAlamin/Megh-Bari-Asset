const SectionHeading = ({
    eyebrow,
    title,
    description,
    light = false,
    align = 'left'
}) => {

    return (
        <div
            className={`
                max-w-2xl
                ${align === 'center' ? 'mx-auto text-center' : ''}
            `}
        >

            {eyebrow && (
                <p
                    className={`
                        mb-4
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.24em]
                        ${light ? 'text-emerald-200' : 'text-emerald-700'}
                    `}
                >
                    {eyebrow}
                </p>
            )}

            <h2
                className={`
                    font-display
                    text-3xl
                    font-semibold
                    leading-tight
                    sm:text-4xl
                    lg:text-5xl
                    ${light ? 'text-white' : 'text-[#18352d]'}
                `}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={`
                        mt-5
                        text-base
                        leading-7
                        ${light ? 'text-white/70' : 'text-slate-600'}
                    `}
                >
                    {description}
                </p>
            )}

        </div>
    );
};

export default SectionHeading;