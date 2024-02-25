import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ chartData }) => {
  const { series, title, categories } = chartData;

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: categories || [],
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
  };

  return (
    <div>
      <h3>{title}</h3>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
