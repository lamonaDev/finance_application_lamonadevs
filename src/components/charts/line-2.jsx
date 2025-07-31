import React, { Component } from "react";
import Chart from "react-apexcharts";
class LineTwo extends Component {
    constructor(props) {
    super(props);
    this.state = {
        series: [
        {
            name: "Sales",
            data: props.dataArray || [], // Fallback to empty array if dataArray is undefined
        },
    ],
        options: {
            chart: {
                height: 350,
                type: "line",
        },
        forecastDataPoints: {
            count: 7,
        },
        stroke: {
            width: 5,
            curve: "smooth",
        },
        xaxis: {
          type: "datetime", // Corrected from 'wtype' to 'type'
            categories: [
            "2000-01-11",
            "2000-02-11",
            "2000-03-11",
            "2000-04-11",
            "2000-05-11",
            "2000-06-11",
            "2000-07-11",
            "2000-08-11",
            "2000-09-11",
            "2000-10-11",
            "2000-11-11",
            "2000-12-11",
            "2001-01-11",
            "2001-02-11",
            "2001-03-11",
            "2001-04-11",
            "2001-05-11",
            "2001-06-11",
        ],
            tickAmount: 10,
            labels: {
            formatter: function (value, timestamp) {
                return new Date(timestamp).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
            });
        },
    },
},
        title: {
            text: "Forecast",
            align: "left",
            style: {
            fontSize: "16px",
            color: "#666",
        },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: ["#FDD835"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
        },
    },
        colors: ["#00E396"], // Replaced OKLCH with a hex color for compatibility
},
};
}
    render() {
    return (
        <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="300px"
            width="100%"
        />
    );
}
}

export default LineTwo;