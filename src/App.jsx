import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {fetchWeather} from './store/actions/weatherAction'
import Search from './components/Search'
import { useEffect } from 'react'

const App = () => {
  const dispatch=useDispatch()
  const currentWeatherState=useSelector(state=>state.weatherDetails.current)
  console.log(currentWeatherState)

  useEffect(()=>{
   dispatch(fetchWeather("pune")) 
  },[])



  return (
    <div className='w-full h-screen flex flex-col'>
      <Search/>
    </div>
  )
}

export default App
