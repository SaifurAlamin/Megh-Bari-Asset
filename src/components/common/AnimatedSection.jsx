import {
    motion,
    useReducedMotion
} from 'framer-motion';

const AnimatedSection = ({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}) => {

    const reduceMotion = useReducedMotion();

    const offset = direction === 'left'
        ? { x: -25 }
        : direction === 'right'
            ? { x: 25 }
            : { y: 25 };

    return (
        <motion.div
            className={className}

            initial={
                reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        ...offset
                    }
            }

            whileInView={
                reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0
                    }
            }

            viewport={{
                once: true,
                amount: 0.15
            }}

            transition={{
                duration: 0.65,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;