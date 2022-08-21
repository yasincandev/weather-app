import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import City from "./City";
import "./index.css";
const App = () => {
  const key = "37202b43e157615dd830bf823358a7ad";

  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );

        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="search-weather-container">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="City (e.g London)"
            className="search-bar"
          />
        </div>
        {city && <City city={city} />}
      </div>
    </div>
  );
};

export default App;
