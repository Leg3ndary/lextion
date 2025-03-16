"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.nav
            className="fixed w-full z-50 backdrop-blur-sm"
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{
                backgroundColor: isScrolled
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:py-6">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-blue-400 font-bold text-2xl">
                            LEXTION
                        </span>
                    </motion.div>

                    <motion.nav
                        className="hidden md:flex space-x-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            staggerChildren: 0.1,
                            delayChildren: 0.2,
                        }}
                    >
                        {[
                            { href: "#", label: "Home" },
                            { href: "#features", label: "Features" },
                            { href: "#services", label: "Services" },
                            { href: "#portfolio", label: "Portfolio" },
                            { href: "#testimonials", label: "Testimonials" },
                            { href: "#contact", label: "Contact" },
                        ].map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-blue-400 transition duration-300"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.1 * index,
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.nav>
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-blue-400 focus:outline-none"
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    className="md:hidden bg-gray-900/95 backdrop-blur-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        initial="closed"
                        animate="open"
                        variants={{
                            open: {
                                transition: {
                                    staggerChildren: 0.07,
                                    delayChildren: 0.2,
                                },
                            },
                            closed: {
                                transition: {
                                    staggerChildren: 0.05,
                                    staggerDirection: -1,
                                },
                            },
                        }}
                    >
                        {[
                            { href: "#", label: "Home", isActive: true },
                            {
                                href: "#features",
                                label: "Features",
                                isActive: false,
                            },
                            {
                                href: "#services",
                                label: "Services",
                                isActive: false,
                            },
                            {
                                href: "#portfolio",
                                label: "Portfolio",
                                isActive: false,
                            },
                            {
                                href: "#testimonials",
                                label: "Testimonials",
                                isActive: false,
                            },
                            {
                                href: "#contact",
                                label: "Contact",
                                isActive: false,
                            },
                        ].map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className={`block px-3 py-2 ${
                                    link.isActive
                                        ? "text-blue-400 font-medium"
                                        : "text-gray-300 hover:text-blue-400 transition duration-300"
                                }`}
                                variants={{
                                    open: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            y: {
                                                stiffness: 1000,
                                                velocity: -100,
                                            },
                                        },
                                    },
                                    closed: {
                                        y: 50,
                                        opacity: 0,
                                        transition: {
                                            y: { stiffness: 1000 },
                                        },
                                    },
                                }}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
}
