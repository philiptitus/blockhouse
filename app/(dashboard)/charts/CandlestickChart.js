import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, Line } from 'recharts';
import { getCandlestickData } from '../../../store/actions';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const CandlestickChart = () => {
    const dispatch = useDispatch();

    const candlestickData = useSelector((state) => state.candlestickData);
    const { loading, error, data } = candlestickData;

    useEffect(() => {
        dispatch(getCandlestickData());
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

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Candlestick Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Define the Candlestick Chart elements */}
                    <Bar dataKey="high" fill="#8884d8" />
                    <Bar dataKey="low" fill="#82ca9d" />
                    <Line type="monotone" dataKey="open" stroke="#ff7300" />
                    <Line type="monotone" dataKey="close" stroke="#ff0000" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CandlestickChart;
