const variants = {
    primary: `
      bg-[#18352d]
      text-white
      hover:bg-[#245344]
    `,

    dark: `
      bg-[#17382f]
      text-white
      hover:bg-[#244c40]
    `,

    outline: `
      border
      border-white/60
      text-white
      hover:bg-white
      hover:text-[#17382f]
    `
};

const Button = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button'
}) => {

    const classes = `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition
        duration-300
        ${variants[variant] || variants.primary}
        ${className}
    `;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    );
};

export default Button;