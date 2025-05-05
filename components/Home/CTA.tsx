import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function CTA() {
    return (
        <motion.section
            className="py-20 bg-gradient-to-br from-blue-900/30 to-black relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]"></div>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    variants={fadeInUp}
                >
                    Ready to <span className="text-blue-400/90">Transform</span>{" "}
                    Your Business?
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    variants={fadeInUp}
                >
                    Let&apos;s work together to create innovative solutions that
                    drive your business forward.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={staggerContainer}
                >
                    <motion.button
                        className="bg-blue-600/90 hover:bg-blue-700/90 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        className="bg-transparent border border-blue-400/30 text-blue-400/90 hover:border-blue-400/50 hover:bg-blue-900/20 font-medium py-3 px-8 rounded-md transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
}
