import AOS from "aos";
import "aos/dist/aos.css";
import React, { Fragment } from "react";
import AnimatedContent from "../components/reactBits/AnimatedContent/AnimatedContent";
import BlurText from "../components/reactBits/blurText";
<BlurText
    text="Get In Touch"
    delay={50}
    animateBy="words"
    direction="top"
    onAnimationComplete={""}
    className="text-3xl md:text-4xl font-extrabold text-center mt-4 mb-10 bg-gradient-to-r from-[rgb(0,200,130)] to-[rgb(0,225,150)] bg-clip-text text-transparent tracking-wider"
/>;
export default function ContactSection(properties) {
    return (
<AnimatedContent distance={100} direction="vertical" reverse={true} duration={0.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0.3} >
    <React.Fragment>
        <section  className="contact-section min-h-screen w-full bg-transparent py-16 px-4 xl:-mb-[20vh] mx-auto">
            <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <div className="p-1 bg-gradient-to-r from-[rgba(0,225,150,0.8)] to-[rgb(0,200,130)]">
                <div className="bg-emerald-900 p-6 md:p-8 rounded-xl">
                <AnimatedContent distance={100} direction="vertical" reverse={true} duration={0.7} ease="power3.out" initialOpacity={0.1} animateOpacity scale={1} threshold={0.1} delay={0.4} >
                    {/* <h2 className="text-3xl md:text-4xl font-extrabold text-center mt-4 mb-10 bg-gradient-to-r from-[rgb(0,200,130)] to-[rgb(0,225,150)] bg-clip-text text-transparent tracking-wider">Get In Touch</h2> */}
                    <div className="mx-auto w-fit">
                        <BlurText
                            text="Get In Touch"
                            delay={70}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={""}
                            className="mx-auto text-3xl md:text-4xl font-extrabold text-center mt-4 mb-10 bg-gradient-to-r from-[rgb(0,200,130)] to-[rgb(0,225,150)] bg-clip-text text-transparent tracking-wider"
                        />
                    </div>
                </AnimatedContent>
                <form className="space-y-9">
                <AnimatedContent distance={100} direction="vertical" reverse={true} duration={0.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0.5} >
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
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={100} direction="vertical" reverse={true} duration={0.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0.6} >
                    <div className="relative group">
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 md:py-3 text-gray-800 bg-emerald-200 rounded-xl border border-emerald-600 focus:outline-none focus:ring-2 ring-[rgba(0,225,150,0.5)] transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute pl-1 left-1 top-3 text-emerald-600 transition-all duration-300 transform -translate-y-11 scale-80 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-x-5 peer-focus:pl-7 peer-focus:-translate-y-11 peer-focus:text-lg peer-focus:scale-80 group-hover:text-[rgb(0,200,130)]"
                        >E-mail</label>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={100} direction="vertical" reverse={true} duration={0.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0.7} >
                    <div className="relative group">
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 md:py-3 text-gray-800 bg-emerald-200 rounded-xl border border-emerald-600 focus:outline-none focus:ring-2 ring-[rgba(0,225,150,0.5)] transition-all duration-300 peer"
                            placeholder=" "
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute pl-1 left-1 top-3 text-emerald-600 transition-all duration-300 transform -translate-y-11 scale-80 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-x-5 peer-focus:pl-7 peer-focus:-translate-y-11 peer-focus:text-lg peer-focus:scale-80 group-hover:text-[rgb(0,200,130)]"
                        >Your Message <span className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">→</span></label>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={100} direction="vertical" reverse={true} duration={0.7} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0.8} >
                    <button
                        type="submit"
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-[rgb(0,225,150)] to-[rgb(0,200,130)] text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(0,225,150,0.5)] active:scale-95 group"
                    >Send Message
                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                        →
                    </span>
                    </button>
                </AnimatedContent>
                </form>
            </div>
            </div>
        </div>
        </section>
    </React.Fragment>
</AnimatedContent>
    );
}
