import "./ToggleSwitch.css";
import React from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const tempContext = React.useContext(CurrentTemperatureUnitContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__input"
        onChange={tempContext.handleToggleSwitch}
      />
      <span
        className={`switch__slider ${
          tempContext.currentTempUnit === "C"
            ? "switch__slider-c"
            : "switch__slider-f"
        }`}
      ></span>
      <p
        className={`switch__temp-c ${
          tempContext.currentTempUnit === "C" && " switch__temp_active"
        }`}
      >
        C
      </p>
      <p
        className={`switch__temp-f ${
          tempContext.currentTempUnit === "F" && " switch__temp_active"
        }`}
      >
        F
      </p>
    </label>
  );
}

export default ToggleSwitch;
