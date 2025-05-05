export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Get in <span className="text-blue-400">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a question or ready to start your project? Reach
                        out to us today.
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
                                            <h4 className="font-bold">Phone</h4>
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
                                            <h4 className="font-bold">Email</h4>
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
    );
}
