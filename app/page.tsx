"use client";

import NavBar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import CTA from "@/components/Home/CTA";
import Contact from "@/components/Home/Contact";
import Comparison from "@/components/Home/Comparison";

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <Hero />
            <Features />
            <Testimonials />
            <CTA />
            <Comparison />
            <Contact />
        </div>
    );
}
