import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const testimonials = [
    {
        name: "Sarah Johnson",
        title: "CEO, TechCorp",
        quote: "Working with Lextion has been transformative for our business. Their innovative solutions and attention to detail exceeded our expectations.",
        image: null,
    },
    {
        name: "David Chen",
        title: "CTO, InnovateLabs",
        quote: "The team's technical expertise and commitment to quality delivered exactly what we needed. They're truly partners in our success.",
        image: null,
    },
    {
        name: "Michael Rodriguez",
        title: "Founder, StartUp Hub",
        quote: "As a startup, we needed a partner who could grow with us. Lextion has been that partner, providing scalable solutions that evolve with our needs.",
        image: null,
    },
];

export default function Testimonials() {
    return (
        <motion.section
            id="testimonials"
            className="py-20 bg-black"
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
                        Client{" "}
                        <span className="text-blue-400/90">Testimonials</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        See what our clients have to say about their experience
                        working with us.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-md border border-blue-900/20 hover:border-blue-400/30 transition-all duration-300"
                            variants={fadeInUp}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <motion.div
                                className="flex items-center mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 * index }}
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-md bg-blue-900/30 flex items-center justify-center mr-4 border border-blue-900/20"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    <span className="text-blue-400/90 font-bold">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </motion.div>
                                <div>
                                    <h3 className="font-bold text-gray-100">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.p
                                className="text-gray-300 italic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 * index }}
                            >
                                &quot;{testimonial.quote}&quot;
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
