import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {fetchWeather} from './store/actions/weatherAction'
import Search from './components/Search'
import { useEffect } from 'react'
import CurrentWeather from './components/CurrentWeather'
import ForecastWeather from './components/ForecastWeather'
const App = () => {
  const dispatch=useDispatch()
  const currentWeatherState=useSelector(state=>state.weatherDetails.current)
  // console.log(currentWeatherState)

  useEffect(()=>{
   dispatch(fetchWeather("pune")) 
  },[])



  return (
    <div className='w-full h-screen flex flex-col items-center grow-2 '>
      <h1 className='text-3xl mb-2 font-bold tracking-tight text-center'>Weather Dashboard</h1>
      <div className='bg-base-100 w-full text-xl sticky top-0 z-10 p-2'>

      <Search/>
      </div>
      
      <CurrentWeather/>
      <ForecastWeather/>
      </div>
    
  )
}

export default App
