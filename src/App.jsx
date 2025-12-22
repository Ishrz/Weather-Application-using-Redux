import './App.css'
import {useDispatch} from 'react-redux'
import {fetchWeather} from './store/actions/weatherAction'

const App = () => {
  const dispatch=useDispatch()

  const clickHandler= ()=>{
    let data= dispatch(fetchWeather("pune"))
    console.log(data)
    
  }




  return (
    <div className='w-full h-screen flex place-items-center'>
      <button onClick={clickHandler} className='bg-red-300 p-5 rounded-2xl'>
        Click Here
      </button>
    </div>
  )
}

export default App
