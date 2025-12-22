import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {fetchWeather} from './store/actions/weatherAction'
import Search from './components/Search'

const App = () => {
  const dispatch=useDispatch()
  const state=useSelector(state=>state)
  console.log(state)
  const clickHandler= ()=>{
    let data= dispatch(fetchWeather("pune"))
    // console.log(data)
  }




  return (
    <div className='w-full h-screen flex flex-col'>
      <button onClick={clickHandler} className='bg-red-300 p-5 rounded-2xl'>
        Click Here
      </button>
      <Search/>
    </div>
  )
}

export default App
