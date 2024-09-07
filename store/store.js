'use client'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { 
    candlestickDataReducer,
    lineChartDataReducer,
    barChartDataReducer,
    pieChartDataReducer
} from './reducers'

const reducer = combineReducers({
    candlestickData: candlestickDataReducer,
    lineChartData: lineChartDataReducer,
    barChartData: barChartDataReducer,
    pieChartData: pieChartDataReducer,
})

const userInfoFromStorage = typeof window !== 'undefined' && localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;



const middleware = [thunk]

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
