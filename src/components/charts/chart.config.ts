import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
    {
        name: "Applicants",
        data: [183, 124, 115, 85, 143, 143, 96],
    },
    {
        name: "Employees",
        data: [95, 84, 72, 44, 108, 108, 47],
    },
    {
        name: "Jobs",
        data: [15, 44, 33, 44, 8, 18, 17],
    },
];

export const TotalRevenueOptions: ApexOptions = {
    chart: {
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    colors: ["#475BE8", "#CFC8FF", "#7FBA7A"],
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: "55%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    stroke: {
        colors: ["transparent"],
        width: 4,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
    },
    tooltip: {
        y: {
            formatter(val: number) {
                return ` ${val} `;
            },
        },
    },
};
