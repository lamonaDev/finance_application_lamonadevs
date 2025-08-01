import LineChartSector from "../pages/LineChartSector";
import LineChartSectorTwo from "../pages/LineChartSectorTwo";
import AreaChartSector from "../pages/AreaChartSector";
export default function SectionOne(properties) {
    const data = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2, 16, 19];
    const anotherData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5];
    const dates = [
        "2025-01-01",
        "2025-02-01",
        "2025-03-01",
        "2025-04-01",
        "2025-05-01",
        "2025-06-01",
    ];
    const prices = [30, 40, 35, 50, 49, 60];
    const plainText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quasi qui distinctio nesciunt facere unde ad excepturi rem itaque autem. Magnam, minima optio similique dolore ea nam voluptates accusamus omnis!"
    return (
        <>
            <section className="section-one-container flex flex-col items-center justify-center gap-[20vh] mb-[40vh] mt-[10vh]">
                    <LineChartSectorTwo data={anotherData} typeOfChart={"Line"} sectorHeader={"this is the sector headerrr"}  sectorInfo={plainText} />
                    <LineChartSector data={data} typeOfChart={"bar"} sectorHeader={"this is the sector header"}  sectorInfo={plainText} />
                    <AreaChartSector data={prices} date={dates} typeOfChart={"Area"} sectorHeader={"this is the sector header"}  sectorInfo={plainText} />
            </section>
        </>
    );
}