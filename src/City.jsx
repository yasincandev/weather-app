import React from "react";

const City = ({ city }) => {
  return (
    <div className="city-container">
      <div className="city-name">
        <h1 className="city-text">{city.name}</h1>
      </div>
      <div className="celcius">
        <h2 className="celcius-text">{city.main.temp} °C</h2>
      </div>
      <div className="description">
        <h4 className="description-text">{city.weather[0].main}</h4>
      </div>
    </div>
  );
};

export default City;
