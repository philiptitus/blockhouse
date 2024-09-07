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
    PIE_CHART_DATA_FAIL,
} from './constants';





// Candlestick Data Reducer
export const candlestickDataReducer = (state = {}, action) => {
    switch (action.type) {
        case CANDLESTICK_DATA_REQUEST:
            return { loading: true };
        case CANDLESTICK_DATA_SUCCESS:
            return { loading: false, data: action.payload };
        case CANDLESTICK_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// Line Chart Data Reducer
export const lineChartDataReducer = (state = {}, action) => {
    switch (action.type) {
        case LINE_CHART_DATA_REQUEST:
            return { loading: true };
        case LINE_CHART_DATA_SUCCESS:
            return { loading: false, data: action.payload };
        case LINE_CHART_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// Bar Chart Data Reducer
export const barChartDataReducer = (state = {}, action) => {
    switch (action.type) {
        case BAR_CHART_DATA_REQUEST:
            return { loading: true };
        case BAR_CHART_DATA_SUCCESS:
            return { loading: false, data: action.payload };
        case BAR_CHART_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// Pie Chart Data Reducer
export const pieChartDataReducer = (state = {}, action) => {
    switch (action.type) {
        case PIE_CHART_DATA_REQUEST:
            return { loading: true };
        case PIE_CHART_DATA_SUCCESS:
            return { loading: false, data: action.payload };
        case PIE_CHART_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
