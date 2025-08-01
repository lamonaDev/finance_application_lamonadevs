import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import LineTwo from '../components/charts/line-2';
export default function AreaChartSector(properties) {
    useEffect(() => { 
            AOS.init({
                easing: "ease",
            })
        }, []);
    return (
        <section data-aos="fade" data-aos-delay="300" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-auto min-h-[40vh]">
            <h1 data-aos="fade" data-aos-delay="400" className="text-center px-6 py-2 bg-emerald-300 w-fit mx-auto rounded-2xl shadow-2xl mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
                {properties.typeOfChart} Chart
            </h1>
            <div data-aos="fade" data-aos-delay="500" className="w-full h-[50vh] sm:h-[10vh] md:h-[30vh] lg:h-[40vh] min-h-[400px] -mb-20">
                <LineTwo dataArray={properties.data} />
            </div>
            <article className="mt-6 flex flex-col items-center gap-4 sm:gap-6">
                <h1 data-aos="fade" data-aos-delay="600" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                    {properties.sectorHeader}
                </h1>
                <p data-aos="fade" data-aos-delay="700" className="text-sm sm:text-base md:text-md text-center w-full sm:w-3/4 md:w-1/2 lg:w-fit px-4">
                    {properties.sectorInfo}
                </p>
            </article>
        </section>
    );
}