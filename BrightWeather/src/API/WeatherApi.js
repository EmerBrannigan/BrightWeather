const API_KEY = import.meta.env.WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city, country = "GB") {
  const url = `${BASE_URL}?q=${city},${country}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found");
    }
    throw new Error("Unable to fetch weather data");
  }

  return response.json();
}
