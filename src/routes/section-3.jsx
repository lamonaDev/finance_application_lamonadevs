import AOS from "aos";
import "aos/dist/aos.css";
import React, { Fragment } from "react";
export default function ContactSection(properties) {
    return (
    <React.Fragment>
        <section className="contact-section min-h-screen w-full bg-transparent py-16 px-4 xl:-mb-[20vh] mx-auto">
            <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <div className="p-1 bg-gradient-to-r from-[rgba(0,225,150,0.8)] to-[rgb(0,200,130)]">
                <div className="bg-emerald-900 p-6 md:p-8 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[rgb(0,200,130)] to-[rgb(0,225,150)] bg-clip-text text-transparent">Get In Touch</h2>
                <form className="space-y-9">
                  {/* Name Input - Elevated Animation */}
                    <div className="relative group">
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 md:py-3 text-gray-800 bg-emerald-200 rounded-xl border border-emerald-600 focus:outline-none focus:ring-2 ring-[rgba(0,225,150,0.5)] transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="name"
                            className="absolute pl-1 left-1 top-3 text-emerald-600 transition-all duration-300 transform -translate-y-11 scale-80 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-x-5 peer-focus:pl-7 peer-focus:-translate-y-11 peer-focus:text-lg peer-focus:scale-80 group-hover:text-[rgb(0,200,130)]"
                        >Full Name</label>
                    {/* <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[rgba(0,225,150,0.2)] to-[rgba(0,225,150,0)] transition-all duration-500 group-hover:from-[rgb(0,225,150)] group-hover:to-[rgba(0,225,150,0.8)] peer-focus:from-[rgb(0,225,150)] peer-focus:to-[rgba(0,225,150,0.8)]"></div> */}
                </div>
                  {/* Email Input - Elevated Animation */}
                    <div className="relative group">
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 md:py-3 text-gray-800 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 ring-[rgba(0,225,150,0.5)] transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-3 text-gray-500 transition-all duration-300 transform -translate-y-8 scale-80 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:scale-80 group-hover:text-[rgb(0,200,130)]"
                        >Email Address</label>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[rgba(0,225,150,0.2)] to-[rgba(0,225,150,0)] transition-all duration-500 group-hover:from-[rgb(0,225,150)] group-hover:to-[rgba(0,225,150,0.8)] peer-focus:from-[rgb(0,225,150)] peer-focus:to-[rgba(0,225,150,0.8)]"></div>
                    </div>
                  {/* Message Textarea - Elevated Animation */}
                    <div className="relative group">
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 md:py-4 text-gray-800 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 ring-[rgba(0,225,150,0.5)] transition-all duration-300 peer resize-none"
                            placeholder=" "
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-3 text-gray-500 transition-all duration-300 transform -translate-y-8 scale-80 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:scale-80 group-hover:text-[rgb(0,200,130)]"
                        >Your Message</label>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[rgba(0,225,150,0.2)] to-[rgba(0,225,150,0)] transition-all duration-500 group-hover:from-[rgb(0,225,150)] group-hover:to-[rgba(0,225,150,0.8)] peer-focus:from-[rgb(0,225,150)] peer-focus:to-[rgba(0,225,150,0.8)]"></div>
                </div>
                  {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-[rgb(0,225,150)] to-[rgb(0,200,130)] text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(0,225,150,0.5)] active:scale-95 group"
                    >Send Message
                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                        →
                    </span>
                </button>
                </form>
            </div>
            </div>
        </div>
        </section>
    </React.Fragment>
    );
}
