import { useState } from "react";
import HomePage from "./Pages/HomePage";
import WeatherPage from "./Pages/WeatherPage";
import { getWeather } from "./API/WeatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(city, country) {
    try {
      setError("");
      const data = await getWeather(city, country);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  }

  return (
    <>
      {!weather && !error && <HomePage onSearch={handleSearch} />}

      {(weather || error) && (
        <WeatherPage
          onSearch={handleSearch}
          weather={weather}
          error={error}
        />
      )}
    </>
  );
}

export default App;
