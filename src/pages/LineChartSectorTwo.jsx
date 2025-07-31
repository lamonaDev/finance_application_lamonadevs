import LineTwo from "../components/charts/line-2";

export default function LineChartSectorTwo(properties) {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-auto min-h-[30vh]">
            <h1 className="text-center px-6 py-2 bg-emerald-300 w-fit mx-auto rounded-2xl shadow-2xl mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
                {properties.typeOfChart} Chart
            </h1>
            <div className="w-full min-w-0">
                <LineTwo dataArray={properties.data} />
            </div>
            <article className="mt-6 flex flex-col items-center gap-4 sm:gap-6">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                    {properties.sectorHeader}
                </h1>
                <p className="text-sm sm:text-base md:text-md text-center w-full sm:w-3/4 md:w-1/2 lg:w-fit">
                    {properties.sectorInfo}
                </p>
            </article>
        </section>
    );
}