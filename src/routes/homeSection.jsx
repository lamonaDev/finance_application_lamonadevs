import "bootstrap-icons/font/bootstrap-icons.css";
export default function HomeSection() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start flex-wrap gap-6 min-h-[50vh]">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center bg-emerald-300 w-fit mx-auto px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-2xl flex items-center gap-2">
                Finance Data
                <i className="bi bi-cash-coin text-lg sm:text-2xl md:text-lg lg:text-3xl"></i>
            </h2>
            <article className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 min-w-[280px] bg-emerald-200 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl text-center h-auto mt-4 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit qui voluptas, corrupti sint, atque molestias iste placeat doloremque, modi soluta ipsam maxime! Ad debitis pariatur quisquam facere, repellendus ab!
                <i className="bi bi-star-fill text-black text-lg sm:text-lg mt-6 lg:text-2xl"></i>
            </article>
        </section>
    );
}