import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { getPieChartData } from '../../../store/actions';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
    const dispatch = useDispatch();

    const pieChartData = useSelector((state) => state.pieChartData);
    const { loading, error, data } = pieChartData;

    useEffect(() => {
        dispatch(getPieChartData());
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
        labels: data.map(item => item.category),
        datasets: [
            {
                label: 'Market Share',
                data: data.map(item => item.value),
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
            }
        }
    };

    return <Pie data={chartData} options={options} />;
};

export default PieChart;
