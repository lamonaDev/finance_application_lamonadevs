import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from 'react';
const Footer = () => {
    useEffect(() => { 
            AOS.init({
                easing: "ease-in-out",
            })
        }, []);
    return (
    <footer data-aos="fade" data-aos-delay="300" className="flex flex-col space-y-10 justify-center p-5 bg-emerald-300 shadow-2xl">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
            <a data-aos="fade-left" data-aos-delay="400" className="hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all text-emerald-950" href="#">Home</a>
            <a data-aos="fade-left" data-aos-delay="500" className="hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all text-emerald-950" href="#">About</a>
            <a data-aos="fade-left" data-aos-delay="600" className="hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all text-emerald-950" href="#">Services</a>
            <a data-aos="fade-left" data-aos-delay="700" className="hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all text-emerald-950" href="#">Media</a>
            <a data-aos="fade-left" data-aos-delay="800" className="hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all text-emerald-950" href="#">Gallery</a>
            <a data-aos="fade-left" data-aos-delay="900" className="hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all text-emerald-950" href="#">Contact</a>
        </nav>
        <div className="flex justify-center space-x-5">
        <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>
        <a  href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
        </a>
        <a  href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
        </a>
        <a  href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
        </a>
        <a  href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
        </a>
        </div>
        <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
    </footer>
    );
};
export default Footer;