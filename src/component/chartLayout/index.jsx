import React, { useState } from "react";
import "./styles.scss";
import Chart from "react-apexcharts";
const ChartLayout = () => {
  const [chartOption, setChartoption] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      series: [
        {
          name: "DK-1",
          data: [40, 23, 25, 15, 25, 28, 38, 46],
        },
        {
          name: "DK-2",
          data: [20, 29, 37, 36, 44, 45, 50, 58],
        },
      ],

      title: {
        text: "Power cost",
        align: "left",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
          },
        },
      ],
    },
  });
  return (
    <div className="innerLayout">
      <Chart
        options={chartOption.options}
        series={chartOption.options.series}
        type="area"
        width="100%"
        height="90%"
      />
    </div>
  );
};

export default ChartLayout;
