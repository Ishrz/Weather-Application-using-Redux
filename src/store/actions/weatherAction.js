import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_PENDING, SET_CITY } from '../constants/weatherConstants'
import api from '../../config/axios'

const API_KEY= import.meta.env.VITE_WEATHER_API

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

export const fetchWeather = (city='pune')=>{
    response= api.get(`${city}&appid=${API_KEY}`)
    
}