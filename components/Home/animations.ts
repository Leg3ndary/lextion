const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export { fadeInUp, staggerContainer };