import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function Hero() {
    return (
        <motion.section
            initial="initial"
            animate="animate"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0"></div>
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                        maskImage:
                            "radial-gradient(circle at center, black 30%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 30%, transparent 70%)",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "40px 40px"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    variants={fadeInUp}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
                        variants={fadeInUp}
                    >
                        No clutter. No chaos. Just{" "}
                        <span className="text-blue-400/90">Lextion</span>
                    </motion.h1>
                    <motion.p
                        className="text-gray-400 text-lg sm:text-xl mb-8 max-w-xl"
                        variants={fadeInUp}
                    >
                        Simple, sleek, and built to help you remember, not
                        organize your life into a second job.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        variants={staggerContainer}
                    >
                        <motion.button
                            className="bg-blue-600/90 hover:bg-blue-700/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            className="bg-transparent border border-blue-400/30 text-blue-400/90 hover:border-blue-400/50 hover:bg-blue-900/20 font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-md bg-blue-500/5 flex items-center justify-center backdrop-blur-sm"
                        animate={{
                            boxShadow: [
                                "0 0 0 0 rgba(59, 130, 246, 0.1)",
                                "0 0 0 20px rgba(59, 130, 246, 0)",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="absolute w-full h-full rounded-md border border-blue-500/20"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute w-3/4 h-3/4 rounded-md border border-blue-400/30"
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.3, 0.4, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                delay: 0.5,
                                repeat: Infinity,
                            }}
                        />
                        <motion.div
                            className="text-blue-400/90 text-4xl font-bold"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            LEXTION
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-0 right-0 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <motion.a
                    href="#features"
                    className="text-gray-400/70 hover:text-blue-400/90 transition-colors duration-300"
                    whileHover={{ y: 3 }}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.a>
            </motion.div>
        </motion.section>
    );
}
