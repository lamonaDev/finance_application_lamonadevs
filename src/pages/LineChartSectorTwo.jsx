import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LineTwo from '../components/charts/line-2';
import ScrollFloat from "../components/reactBits/scrollFloat";
import BlurText from "../components/reactBits/blurText";
import ScrollReveal from "../components/reactBits/scrollReveal";
import VariableProximity from "../components/reactBits/VariableProximity";
import { useRef } from "react";
import TextPressure from "../components/reactBits/TextPressure";
export default function AreaChartSector(properties) {
    const containerRef = useRef(null);
    useEffect(() => { 
            AOS.init({
                easing: "ease",
            })
        }, []);
    return (
        <section data-aos="fade" data-aos-delay="300" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-auto min-h-[40vh]">
            <h1 data-aos="fade" data-aos-delay="400" className="text-center px-6 py-2 bg-emerald-300 text-emerald-800 w-fit mx-auto rounded-2xl shadow-2xl mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
                {properties.typeOfChart} Chart
            </h1>
            <div data-aos="fade" data-aos-delay="500" className="text-emerald-800 w-full h-[50vh] sm:h-[10vh] md:h-[30vh] lg:h-[40vh] min-h-[400px] -mb-20">
                <LineTwo dataArray={properties.data} />
            </div>
            <article className="mt-6 flex flex-col items-center gap-4 sm:gap-6">
                <h1 data-aos="fade" data-aos-delay="600" className=" text-emerald-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                    <BlurText
                        text= {properties.sectorHeader}
                        delay={25}
                        animateBy="letters"
                        direction="top"
                        onAnimationComplete={""}
                        className="text-2xl"
                    />
                </h1>
                <p data-aos="fade" data-aos-delay="700" className="text-sm sm:text-base md:text-md text-center w-full sm:w-3/4 md:w-1/2 lg:w-fit px-4">
                    <div className="text-emerald-800" ref={containerRef} style={{ position: "relative" }}>
                        <VariableProximity
                            label= {properties.sectorInfo}
                            className={"variable-proximity-demo"}
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                    </div>
                </p>
            </article>
        </section>
    );
}