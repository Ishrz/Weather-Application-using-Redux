import { useSelector } from "react-redux";


const CurrentWeather = () => {
  const { current, loading, error } = useSelector(
    (state) => state.weatherDetails
  );

//   console.log(current);
  // console.log(loading)

  if (loading)
    return <span className="loading loading-bars loading-xl "></span>
  if (!current) return null;
  if (error) return <p>{ error }</p>

  return (
    <div className="card bg-neutral mt-5 text-neutral-content w-full ">
      <div className="card-body items-center text-center">
        <h1 className="card-title bg-success px-5 py-2 rounded-2xl text-3xl">
          {current.name}
        </h1>
        <h2 className="text-2xl">Temperature : {(current.main.temp - 273).toFixed(2)} °C</h2>
        <h2 className="text-2xl">Humidity : {current.main.humidity}%</h2>
        <h2 className="text-2xl">Atmosphere : {current.weather[0].main}</h2>

      </div>
    </div>
  );
};

export default CurrentWeather;
