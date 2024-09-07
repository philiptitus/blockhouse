import {
    CANDLESTICK_DATA_REQUEST,
    CANDLESTICK_DATA_SUCCESS,
    CANDLESTICK_DATA_FAIL,
    LINE_CHART_DATA_REQUEST,
    LINE_CHART_DATA_SUCCESS,
    LINE_CHART_DATA_FAIL,
    BAR_CHART_DATA_REQUEST,
    BAR_CHART_DATA_SUCCESS,
    BAR_CHART_DATA_FAIL,
    PIE_CHART_DATA_REQUEST,
    PIE_CHART_DATA_SUCCESS,
    PIE_CHART_DATA_FAIL
} from './constants';
import axiosInstance from './axiosinstance';

// Candlestick Data Action
export const getCandlestickData = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CANDLESTICK_DATA_REQUEST,
        });

 

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axiosInstance.get(`/candlestick-data/`, config);

        dispatch({
            type: CANDLESTICK_DATA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CANDLESTICK_DATA_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Line Chart Data Action
export const getLineChartData = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: LINE_CHART_DATA_REQUEST,
        });



        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axiosInstance.get(`/line-chart-data/`, config);

        dispatch({
            type: LINE_CHART_DATA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: LINE_CHART_DATA_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Bar Chart Data Action
export const getBarChartData = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: BAR_CHART_DATA_REQUEST,
        });


        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axiosInstance.get(`/bar-chart-data/`, config);

        dispatch({
            type: BAR_CHART_DATA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: BAR_CHART_DATA_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};

// Pie Chart Data Action
export const getPieChartData = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PIE_CHART_DATA_REQUEST,
        });



        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axiosInstance.get(`/pie-chart-data/`, config);

        dispatch({
            type: PIE_CHART_DATA_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PIE_CHART_DATA_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
