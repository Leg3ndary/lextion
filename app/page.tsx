import NavBar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black z-0"></div>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]"></div>
                    <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-blue-400 opacity-50 animate-pulse"></div>
                    <div
                        className="absolute top-40 right-40 w-1 h-1 rounded-full bg-blue-300 opacity-30 animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute bottom-60 left-60 w-2 h-2 rounded-full bg-blue-500 opacity-40 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                        className="absolute bottom-20 right-20 w-1 h-1 rounded-full bg-blue-400 opacity-30 animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Discover the Future{" "}
                            <span className="text-blue-400">with Lextion</span>
                        </h1>
                        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl">
                            Transforming ideas into digital reality. We create
                            innovative solutions to help your business thrive in
                            the digital landscape.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                Get Started
                            </button>
                            <button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/30 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <div className="absolute w-full h-full rounded-full border border-blue-500/30 animate-pulse"></div>
                            <div
                                className="absolute w-3/4 h-3/4 rounded-full border border-blue-400/40"
                                style={{ animationDelay: "0.5s" }}
                            ></div>
                            <div className="text-blue-400 text-4xl font-bold">
                                LEXTION
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <a
                        href="#features"
                        className="text-gray-400 hover:text-blue-400 animate-bounce transition duration-300"
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
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </div>
            </section>
            <section id="features" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Key <span className="text-blue-400">Features</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Discover the powerful features that make our
                            solutions stand out from the competition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovative Design",
                                description:
                                    "Our cutting-edge designs combine aesthetics with functionality to create memorable user experiences.",
                                icon: (
                                    <svg
                                        className="h-10 w-10 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
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
                                        className="h-10 w-10 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
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
                                        className="h-10 w-10 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg border border-blue-900/30 transform transition duration-500 hover:scale-105 hover:border-blue-500/50"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="services" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Our <span className="text-blue-400">Services</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We offer a wide range of services to help you
                            achieve your business goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Web Development",
                                description:
                                    "Custom websites and web applications designed to meet your specific business requirements.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400"
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
                                        className="h-12 w-12 text-blue-400"
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
                                title: "UI/UX Design",
                                description:
                                    "Intuitive and engaging user interfaces that enhance user experience and satisfaction.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Digital Marketing",
                                description:
                                    "Comprehensive digital marketing strategies to increase your online presence and reach.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Cloud Solutions",
                                description:
                                    "Secure and scalable cloud solutions for efficient data management and operations.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 15a4 4 0 004 4h9a5 5 0 10-4.975-5.5M3 15a4 4 0 014-4h9a5 5 0 0110 0M21 19.5V15m0 0l-3-3m3 3l3-3"
                                        />
                                    </svg>
                                ),
                            },
                            {
                                title: "Consulting",
                                description:
                                    "Expert advice and guidance to help you navigate the complex digital landscape.",
                                icon: (
                                    <svg
                                        className="h-12 w-12 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                        />
                                    </svg>
                                ),
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 border border-blue-900/20 hover:border-blue-500/30"
                            >
                                <div className="bg-blue-900/20 p-4 rounded-lg inline-block mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="portfolio" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Our <span className="text-blue-400">Portfolio</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Take a look at some of our recent projects that
                            showcase our expertise and creativity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="group relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105"
                            >
                                <div className="h-64 bg-blue-900/50 flex items-center justify-center">
                                    <div className="text-blue-400 font-bold text-lg">
                                        Project {item}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">
                                            Project Title {item}
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            Brief description of the project and
                                            the technologies used.
                                        </p>
                                        <button className="text-blue-400 hover:text-blue-300 transition duration-300">
                                            View Project →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/30 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            View All Projects
                        </button>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Client{" "}
                            <span className="text-blue-400">Testimonials</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Hear what our clients have to say about their
                            experience working with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "John Smith",
                                title: "CEO, Tech Innovations",
                                quote: "Working with Lextion has been an absolute pleasure. They delivered our project on time and exceeded our expectations in every way.",
                                image: null,
                            },
                            {
                                name: "Sarah Johnson",
                                title: "Marketing Director, Global Solutions",
                                quote: "The team at Lextion understood our vision from the start and translated it into a solution that has transformed our business operations.",
                                image: null,
                            },
                            {
                                name: "Michael Rodriguez",
                                title: "Founder, StartUp Hub",
                                quote: "As a startup, we needed a partner who could grow with us. Lextion has been that partner, providing scalable solutions that evolve with our needs.",
                                image: null,
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border border-blue-900/30 transform transition duration-500 hover:scale-105 hover:border-blue-500/50"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mr-4">
                                        <span className="text-blue-400 font-bold">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">
                                    {testimonial.quote}
                                </p>
                                <div className="mt-4 flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "200+", label: "Clients" },
                            { value: "500+", label: "Projects" },
                            { value: "10+", label: "Years Experience" },
                            { value: "25+", label: "Team Members" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg border border-blue-900/30"
                            >
                                <div className="text-blue-400 text-4xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gradient-to-br from-blue-900/50 to-black relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_70%)]"></div>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to{" "}
                        <span className="text-blue-400">Transform</span> Your
                        Business?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's work together to create innovative solutions that
                        drive your business forward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900/30 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
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
                                                    1234 Street, City,
                                                    Country
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
