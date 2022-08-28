import "./styles.css";
import SearchForm from "./SearchForm";

export default function App() {
  return (
    <div className="App">
      <h1>WeatherApp</h1>
      <SearchForm />
      <br />
      <hr />
      <p>
        <a
          href="https://github.com/Dralena/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Carmen von Känel
      </p>
    </div>
  );
}
