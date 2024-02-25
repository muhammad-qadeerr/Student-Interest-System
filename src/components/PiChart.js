import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PiChart = ({ chartSeries, chartLabels }) => {
    const options = {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: chartLabels || [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={chartSeries} type="pie" width={380} />
    </div>
  );
};

export default PiChart;
