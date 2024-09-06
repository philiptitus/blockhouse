import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { pieChartData } from '../../../data/chart/data';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: pieChartData.map(item => item.category),
    datasets: [
      {
        label: 'Market Share',
        data: pieChartData.map(item => item.value),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Market Share Chart',
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

  return <Pie data={data} options={options} />;
};

export default PieChart;
