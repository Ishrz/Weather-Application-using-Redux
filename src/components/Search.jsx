import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, setCity } from "../store/actions/weatherAction";

const Search = () => {

  const dispatch=useDispatch()
  const cityState=useSelector(state=>state.weatherDetails.city)
    const currentState=useSelector(state=>state.weatherDetails.currentState)


const changeHandler=(evt)=>{
    dispatch(setCity(evt.target.value))

  }

const clickHandler=()=>{
  dispatch(fetchWeather(cityState))
}

  return (
    <div className="join gap-3">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search"
              required 
              placeholder="Enter City Name"
              value={cityState}
              onChange={changeHandler}
              />
      </label>
      <button onClick={clickHandler} className="btn btn-neutral join-item">Search</button>
    </div>
  );
};

export default Search;
