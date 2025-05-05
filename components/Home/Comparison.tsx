import { fadeInUp, staggerContainer } from "./animations";
import { motion } from "framer-motion";

export default function Comparison() {
    return (
        <motion.section
            className="py-20 bg-gray-900/50"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        variants={fadeInUp}
                    >
                        Why Choose{" "}
                        <span className="text-blue-400/90">Lextion</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        While Notion & Obsidian are powerful tools, they're
                        designed for deep organization and knowledge management.
                        Lextion is different.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="bg-gray-800/50 p-8 rounded-lg border border-gray-700/50"
                        variants={fadeInUp}
                    >
                        <h3 className="text-xl font-bold mb-4 text-blue-400/90">
                            Notion & Obsidian
                        </h3>
                        <ul className="text-gray-400 space-y-3">
                            <li>• Powerful but bloated for quick reminders</li>
                            <li>• Designed for deep organization</li>
                            <li>• Requires significant setup time</li>
                            <li>• Complex knowledge management focus</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="bg-blue-900/20 p-8 rounded-lg border border-blue-500/30"
                        variants={fadeInUp}
                    >
                        <h3 className="text-xl font-bold mb-4 text-blue-400/90">
                            Lextion
                        </h3>
                        <ul className="text-gray-400 space-y-3">
                            <li>• Lightweight and instant</li>
                            <li>• Intuitive and frictionless</li>
                            <li>• No setup required</li>
                            <li>
                                • Smart reminders that work when you need them
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
