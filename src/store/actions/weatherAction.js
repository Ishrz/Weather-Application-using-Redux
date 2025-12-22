import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_PENDING, SET_CITY } from '../constants/weatherConstants'

export const fetchWeatherPending=()=>{
    return{
        type: FETCH_WEATHER_PENDING
    }
}

export const fetchCurrentSuccess = (data)=>{
    return{
        type: FETCH_CURRENT_SUCCESS,
        payload: data
    }
}

export const fetchForecastSuccess = (data)=>{
    return{
        type: FETCH_FORECAST_SUCCESS,
        payload:data
    }
}

export const fetchWeatherError = ()=>{
    return{

    }
}

export const setCity = (data)=>{
    return{
        type:SET_CITY,
        payload:data
    }
}