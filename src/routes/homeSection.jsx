import "bootstrap-icons/font/bootstrap-icons.css";
export default function HomeSection() {
    return (
        <>
            <section className="home-section h-[60vh] mt-5 flex flex-row items-center justify-start flex-wrap">
                <h2 className="home-section-header text-2xl text-center bg-emerald-300 w-fit mx-auto p-5 rounded-full shadow-2xl min-w-[20%] xl:ms-[20vh]  md:text-2xl md:p-5 xl:text-5xl">Finance Data <i className="bi bi-cash-coin text-md m-2"></i></h2>
                <article className="home-section-article h-[80%] text-2xl text-center bg-emerald-200 p-8 w-[90%] mx-auto mt-5 flex flex-col items-center justify-center rounded-t-3xl shadow-2xl xl:w-[40%] min-w-[50%] mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit qui voluptas, corrupti sint, atque molestias iste placeat doloremque, modi soluta ipsam maxime! Ad debitis pariatur quisquam facere, repellendus ab!
                    <i className="bi bi-star-fill mt-5"></i>
                </article>
            </section>
        </>
    )
}