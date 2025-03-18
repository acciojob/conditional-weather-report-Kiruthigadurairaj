import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [weatherInput, setWeatherInput] = useState({ temperature: 25, conditions: "Sunny" });
  const [textColor, setTextColor] = useState("blue");

  useEffect(() => {
    setTextColor(weatherInput.temperature > 20 ? "red" : "blue");
  }, [weatherInput.temperature]);

  return (
    <div>
      {/* Do not remove the main div */}
      <p>
        Temperature: <span style={{ color: textColor }}>{weatherInput.temperature}</span>
      </p>
      <p>Conditions: {weatherInput.conditions}</p>
    </div>
  );
};

export default App;
