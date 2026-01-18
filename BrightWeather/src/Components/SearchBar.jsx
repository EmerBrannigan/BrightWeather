import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("GB");

  function handleSubmit(e) {
    e.preventDefault();
    if (!city) return;
    onSearch(city, country);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {/* Optional country selector */}
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="GB">UK</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
}
