import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
    // 1. useScroll hook tracks the scroll progress of the page.
    // It returns a MotionValue (scrollYProgress) from 0 to 1.
    const { scrollYProgress } = useScroll();

    // 2. useSpring adds a "smoothing" or "damping" effect to the scrollYProgress value.
    // This makes the progress bar's movement feel much less jerky and more natural.
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        // We use a `motion.div` so we can animate its properties.
        // The `style` prop links our smoothed `scaleX` value to the CSS transform property.
        <motion.div
            className="fixed top-[3.8rem] left-0 right-0 h-1 bg-gray-900 origin-left"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgressBar;