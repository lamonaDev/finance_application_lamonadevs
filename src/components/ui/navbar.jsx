import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
const Nav = () => {
    useEffect(() => { 
        AOS.init({
            easing: "ease-in-out",
        })
    }, []);
    return (
    <nav data-aos="fade-in" data-aos-duration="300" className="bg-emerald-300 flex justify-center items-center p-3 mx-auto m-5 max-w-[700px] rounded-3xl sticky top-3 shadow-2xl xl:min-w-[1000px] md:min-w-[600px]">
    <ul className="text-white flex gap-x-10 xl:gap-x-20">
        <li data-aos="fade-right" data-aos-duration="500" className="relative table-cell py-1">
            <Link className="inline-block relative no-underline after-line text-emerald-950 hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all" to={"/"}><i className="bi bi-house text-2xl"></i></Link>
        </li>
        <li data-aos="fade-right" data-aos-duration="600" className="relative table-cell py-1">
            <Link className="inline-block relative no-underline after-line text-emerald-950 hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all" to={"/sectionOne"}><i className="bi bi-clipboard-data-fill text-2xl"></i></Link>
        </li>
        <li data-aos="fade-right" data-aos-duration="700" className="relative table-cell py-1">
            <a className="inline-block relative no-underline after-line text-emerald-950 hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all" href="#"><i className="bi bi-graph-up text-2xl"></i></a>
        </li>
        <li data-aos="fade-right" data-aos-duration="800" className="relative table-cell py-1">
            <a className="inline-block relative no-underline after-line text-emerald-950 hover:text-emerald-500 hover:bg-emerald-900 p-2 rounded transition-all" href="#"><i className="bi bi-envelope-at-fill text-2xl"></i></a>
        </li>
    </ul>
    </nav>
    );
};

export default Nav;