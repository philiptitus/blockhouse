import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { getBarChartData } from '../../../store/actions';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

// Register necessary components for the Bar Chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const BarChart = () => {
    const dispatch = useDispatch();

    const barChartData = useSelector((state) => state.barChartData);
    const { loading, error, data } = barChartData;

    useEffect(() => {
        dispatch(getBarChartData());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    const chartData = {
        labels: data.map(item => item.month),
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.map(item => item.sales),
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

    return <Bar data={chartData} options={options} />;
};

export default BarChart;
