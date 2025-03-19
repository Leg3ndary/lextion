"use client";

import NavBar from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <motion.section
                initial="initial"
                animate="animate"
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0"></div>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)]"></div>
                    <motion.div
                        className="absolute top-20 left-20 w-2 h-2 rounded-sm bg-blue-400/30 opacity-50"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-40 right-40 w-1 h-1 rounded-sm bg-blue-300/20 opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-60 left-60 w-2 h-2 rounded-sm bg-blue-500/30 opacity-40"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            delay: 0.5,
                            repeat: Infinity,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-20 w-1 h-1 rounded-sm bg-blue-400/20 opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            delay: 1.5,
                            repeat: Infinity,
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
                            Discover the Future{" "}
                            <span className="text-blue-400/90">
                                with Lextion
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-gray-400 text-lg sm:text-xl mb-8 max-w-xl"
                            variants={fadeInUp}
                        >
                            Transforming ideas into digital reality. We create
                            innovative solutions to help your business thrive in
                            the digital landscape.
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
            <motion.section
                id="features"
                className="py-20 bg-gray-900/50"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            variants={fadeInUp}
                        >
                            Key{" "}
                            <span className="text-blue-400/90">Features</span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            Discover the powerful features that make our
                            solutions stand out from the competition.
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
            <motion.section
                id="services"
                className="py-20 bg-black"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            variants={fadeInUp}
                        >
                            Our{" "}
                            <span className="text-blue-400/90">Services</span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            We offer a wide range of services to help you
                            achieve your business goals.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                title: "Web Development",
                                description:
                                    "Custom websites and web applications designed to meet your specific business requirements.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400/90"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Mobile Apps",
                                description:
                                    "Native and cross-platform mobile applications that engage users and drive business growth.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400/90"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Cloud Solutions",
                                description:
                                    "Scalable cloud infrastructure and services that optimize your business operations.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400/90"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-md p-6 transform transition-all duration-300 border border-blue-900/20 hover:border-blue-400/30"
                                variants={fadeInUp}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <motion.div
                                    className="bg-blue-900/10 p-4 rounded-md inline-block mb-4"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2 text-gray-100">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                id="portfolio"
                className="py-20 bg-gray-900/50"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            variants={fadeInUp}
                        >
                            Our{" "}
                            <span className="text-blue-400/90">Portfolio</span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            Take a look at some of our recent projects that
                            showcase our expertise and creativity.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                    >
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <motion.div
                                key={item}
                                className="group relative overflow-hidden rounded-md transform transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className="h-64 bg-blue-900/30 backdrop-blur-sm flex items-center justify-center border border-blue-900/20 group-hover:border-blue-400/30"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <motion.div
                                        className="text-blue-400/90 font-bold text-lg"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Project {item}
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                >
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-100">
                                            Project Title {item}
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            Brief description of the project and
                                            the technologies used.
                                        </p>
                                        <motion.button
                                            className="text-blue-400/90 hover:text-blue-300 transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            View Project →
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-12"
                        variants={fadeInUp}
                    >
                        <motion.button
                            className="bg-transparent border border-blue-400/30 text-blue-400/90 hover:border-blue-400/50 hover:bg-blue-900/20 font-medium py-3 px-8 rounded-md transition-all duration-300"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View All Projects
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                id="testimonials"
                className="py-20 bg-black"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4"
                            variants={fadeInUp}
                        >
                            Client{" "}
                            <span className="text-blue-400/90">
                                Testimonials
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto"
                            variants={fadeInUp}
                        >
                            See what our clients have to say about their
                            experience working with us.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {[
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
                        ].map((testimonial, index) => (
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
                                    "{testimonial.quote}"
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                className="py-16 bg-gray-900/50"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        variants={staggerContainer}
                    >
                        {[
                            { value: "200+", label: "Clients" },
                            { value: "500+", label: "Projects" },
                            { value: "10+", label: "Years Experience" },
                            { value: "25+", label: "Team Members" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-md border border-blue-900/20 hover:border-blue-400/30 transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <motion.div
                                    className="text-blue-400/90 text-4xl font-bold mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index }}
                                >
                                    {stat.value}
                                </motion.div>
                                <motion.div
                                    className="text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 * index }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
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
                        Ready to{" "}
                        <span className="text-blue-400/90">Transform</span> Your
                        Business?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        Let's work together to create innovative solutions that
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
            <section id="contact" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Get in <span className="text-blue-400">Touch</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Have a question or ready to start your project?
                            Reach out to us today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-400 mb-2"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-400 mb-2"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-gray-400 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-gray-400 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <div>
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="lg:pl-8">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-blue-400 mt-1 mr-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />

                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <div>
                                                <h4 className="font-bold">
                                                    Address
                                                </h4>
                                                <p className="text-gray-400">
                                                    1234 Street, City, Country
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-blue-400 mt-1 mr-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                                />
                                            </svg>
                                            <div>
                                                <h4 className="font-bold">
                                                    Phone
                                                </h4>
                                                <p className="text-gray-400">
                                                    +1 (123) 456-7890
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <svg
                                                className="h-6 w-6 text-blue-400 mt-1 mr-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 14l9-5-9-5-9 5 9 5z"
                                                />
                                            </svg>
                                            <div>
                                                <h4 className="font-bold">
                                                    Email
                                                </h4>
                                                <p className="text-gray-400">
                                                    <a
                                                        href="mailto:"
                                                        className="text-blue-400 hover:underline"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
