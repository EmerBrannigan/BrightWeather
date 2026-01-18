import SearchBar from "../Components/SearchBar";

export default function HomePage({ onSearch }) {
  return (
    <div>
      <h1>Bright Weather</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
