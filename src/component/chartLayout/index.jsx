import React, { useState } from "react";
import "./styles.scss";
import Chart from "react-apexcharts";
const ChartLayout = () => {
  var data = [
    {
      x: 1994,
      y: 49,
    },
    {
      x: 1995,
      y: 52,
    },
    {
      x: 1996,
      y: 54,
    },
    {
      x: 1997,
      y: 56,
    },
    {
      x: 1998,
      y: 54,
    },
    {
      x: 1999,
      y: 52,
    },
    {
      x: 2000,
      y: 50,
    },
    {
      x: 2001,
      y: 0,
    },
    {
      x: 2002,
      y: 10,
    },
    {
      x: 2003,
      y: 20,
    },
    {
      x: 2004,
      y: 30,
    },
    {
      x: 2005,
      y: 40,
    },
    {
      x: 2006,
      y: 60,
    },
    {
      x: 2007,
      y: 80,
    },
    {
      x: 2008,
      y: 100,
    },
    {
      x: 2009,
      y: 80,
    },
    {
      x: 2010,
      y: 60,
    },
    {
      x: 2011,
      y: 40,
    },
    {
      x: 2012,
      y: 20,
    },
    {
      x: 2013,
      y: 0,
    },
    {
      x: 2014,
      y: 10,
    },
    {
      x: 2015,
      y: 20,
    },
    {
      x: 2016,
      y: 50,
    },
  ];
  var labelFormatter = function (value) {
    var val = Math.abs(value);
    if (val >= 1000000) {
      val = (val / 1000000).toFixed(1) + " M";
    }
    return val;
  };
  const [chartOption, setChartoption] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      series: [
        {
          name: "DK-1",
          data: data,
        },
        {
          name: "DK-2",
          data: data,
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
        type: "datetime",
        opposite: true,
        tickAmount: 4,
        seriesName: "DK-1",
      },
      yaxis: {
        min: 0,
        max: 99,
        tickAmount: 4,
        logarithmic: true,
        seriesName: "DK-2",
      },
    },
  });
  return (
    <div className="innerLayout">
      <Chart
        options={chartOption.options}
        series={chartOption.options.series}
        type="line"
        width="100%"
        height="90%"
      />
    </div>
  );
};

export default ChartLayout;
