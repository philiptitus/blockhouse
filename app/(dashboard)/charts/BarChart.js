import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { barChartData } from '../../../data/chart/data';

// Register necessary components for the Bar Chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const BarChart = () => {
  const data = {
    labels: barChartData.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Sales',
        data: barChartData.map(item => item.sales),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
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
        text: 'Monthly Sales Chart',
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

  return <Bar data={data} options={options} />;
};

export default BarChart;
