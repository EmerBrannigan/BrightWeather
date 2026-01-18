import SearchBar from "../Components/SearchBar";
import WeatherCard from "../Components/WeatherCard";
import ErrorMessage from "../Components/ErrorMessage";

export default function WeatherPage({ onSearch, weather, error }) {
  return (
    <div>
        <h1>Bright Weather</h1>
      <SearchBar onSearch={onSearch} />

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
