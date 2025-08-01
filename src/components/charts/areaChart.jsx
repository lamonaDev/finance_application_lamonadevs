import React, { Component } from "react";
import Chart from "react-apexcharts";

class AreaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    name: "STOCK ABC",
                    data: props.data,
                },
            ],
            options: {
                chart: {
                    type: "area",
                    height: "100%",
                    width: "100%",
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: true,
                    },
                },
                colors: ["#00E396"], // Set series color here
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.3,
                        stops: [0, 90, 100],
                    },
                },
                title: {
                    text: "Fundamental Analysis of Stocks",
                    align: "left",
                    style: {
                        fontSize: "16px",
                        fontWeight: "bold",
                    },
                },
                subtitle: {
                    text: "Price Movements",
                    align: "left",
                    style: {
                        fontSize: "12px",
                    },
                },
                labels: props.date,
                xaxis: {
                    type: "datetime",
                    labels: {
                        format: "MMM yyyy",
                    },
                },
                yaxis: {
                    opposite: true,
                    title: {
                        text: "Price",
                    },
                },
                legend: {
                    horizontalAlign: "left",
                },
                responsive: [
                    {
                        breakpoint: 640,
                        options: {
                            chart: {
                                height: "100%",
                            },
                            title: {
                                style: {
                                    fontSize: "14px",
                                },
                            },
                            subtitle: {
                                style: {
                                    fontSize: "10px",
                                },
                            },
                        },
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div className="w-full h-full">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height="100%"
                    width="100%"
                />
            </div>
        );
    }
}

export default AreaChart;