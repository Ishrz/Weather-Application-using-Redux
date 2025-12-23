import { useSelector } from "react-redux";

const ForecastWeather = () => {
  const { city, forecast, error, loading } = useSelector(
    (state) => state.weatherDetails
  );


  if(error) return <p>{error}</p>
  if(!forecast) return null;

  return (
    <div className="card w-full h-1/2 bg-neutral mt-5 text-neutral-content overflow-auto">
      <div className="card-body items-center text-center p-0 ">
        <h1 className="card-title bg-success px-5 py-2 rounded-2xl sticky top-0">4 Days Forecast</h1>
        <div className="grid  grid-cols-1 items-center justify-center gap-1 space-x-2.5 text-lg min-[700px]:grid-cols-2 min-[800px]:text-2xl min-[800px]:gap-5  text-nowrap min-[700px]:text-xl"> 
        {forecast.map( (elem,index)=>(
        <h2 className=" " key={index}>{elem.dt_txt} : {(elem.main.temp- 273).toFixed(2)} °C</h2>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastWeather;
