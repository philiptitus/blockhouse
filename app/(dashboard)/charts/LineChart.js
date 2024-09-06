import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title } from 'chart.js';
import { lineChartData } from '../../../data/chart/data';

// Register necessary components for the Line Chart
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const LineChart = () => {
  const data = {
    labels: lineChartData.map(item => item.date),
    datasets: [
      {
        label: 'Temperature Trend',
        data: lineChartData.map(item => item.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Temperature Trend Chart',
        font: {
          size: 20
        }
      },
      afterDraw: (chart) => {
        const { ctx, chartArea: { bottom } } = chart;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, bottom);
        ctx.lineTo(chart.width, bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'; // Border color
        ctx.stroke();
        ctx.restore();
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
