import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export default function Features() {
    return (
        <motion.section
            id="features"
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
                        Key <span className="text-blue-400/90">Features</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Discover the powerful features that make our solutions
                        stand out from the competition.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                >
                    {[
                        {
                            title: "Innovative Design",
                            description:
                                "Our cutting-edge designs combine aesthetics with functionality to create memorable user experiences.",
                            icon: (
                                <svg
                                    className="h-10 w-10 text-blue-400/90"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Advanced Technology",
                            description:
                                "We leverage the latest technologies to build scalable, high-performance solutions for your business needs.",
                            icon: (
                                <svg
                                    className="h-10 w-10 text-blue-400/90"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            ),
                        },
                        {
                            title: "Exceptional Support",
                            description:
                                "Our dedicated team provides ongoing support to ensure your solutions continue to perform optimally.",
                            icon: (
                                <svg
                                    className="h-10 w-10 text-blue-400/90"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            ),
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-md border border-blue-900/20 hover:border-blue-400/30 transition-all duration-300"
                            variants={fadeInUp}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <motion.div
                                className="mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2 text-gray-100">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
