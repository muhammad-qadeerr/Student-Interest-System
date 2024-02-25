import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ chartSeries, chartCategories }) => {
  const [series, setSeries] = useState(chartSeries || []);
  const [categories, setCategories] = useState(chartCategories || []);

  const [options, setOptions] = useState({
    annotations: {
      // Your annotations configuration
    },
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      // Your plot options
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2'],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: categories,
      tickPlacement: 'on',
    },
    yaxis: {
      title: {
        text: 'Servings',
      },
    },
    fill: {
      // Your fill configuration
    },
  });

  useEffect(() => {
    // Update series and categories when props change
    setSeries(chartSeries || []);
    setCategories(chartCategories || []);
  }, [chartSeries, chartCategories]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
