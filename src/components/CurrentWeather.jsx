import { useSelector } from "react-redux";


const CurrentWeather = () => {
  const { current, loading, error } = useSelector(
    (state) => state.weatherDetails
  );

  console.log(current);
  // console.log(loading)

  if (loading)
    return <p className="bg-red-300 p-5 text-2xl">Loading............</p>;
  if (!current) return null;
  if (error) return <p>{ error }</p>

  return (
    <div className="card bg-neutral mt-5 text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h1 className="card-title bg-success px-5 py-2 rounded-2xl">
          {current.name}
        </h1>
        <h2>Temperature : {(current.main.temp - 273).toFixed(2)} °C</h2>
        <h2>Humidity : {current.main.humidity}%</h2>
        <h2>Atmosphere : {current.weather[0].main}</h2>
        <h2>Atmosphere : {current.weather[0].description}</h2>
      </div>
    </div>
  );
};

export default CurrentWeather;
