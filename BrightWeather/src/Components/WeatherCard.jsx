export default function WeatherCard({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Temp: {weather.main.temp} °C</p>
      <p>Feels like: {weather.main.feels_like} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Min temp: {weather.main.temp_min} °C</p>
      <p>Max temp: {weather.main.temp_max} °C</p>
      <p>Wind: {(weather.wind.speed * 2.237).toFixed(1)} mph</p>
      <p>Rain last hour: {weather.rain ? weather.rain["1h"] : 0} mm</p>
    </div>
  );
}
