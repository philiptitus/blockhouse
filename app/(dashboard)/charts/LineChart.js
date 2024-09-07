import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title } from 'chart.js';
import { getLineChartData } from '../../../store/actions';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

// Register necessary components for the Line Chart
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const LineChart = () => {
    const dispatch = useDispatch();

    const lineChartData = useSelector((state) => state.lineChartData);
    const { loading, error, data } = lineChartData;

    useEffect(() => {
        dispatch(getLineChartData());
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
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Temperature Trend',
                data: data.map(item => item.value),
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

    return <Line data={chartData} options={options} />;
};

export default LineChart;
