import React, { useState } from "react";
import './Bmi.css'
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(true);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiResult = (weight / ((height / 100) ** 2)).toFixed(2);
      setBMI(bmiResult);
      if (bmiResult < 18.5) {
        setCategory("Underweight");
      } else if (bmiResult >= 18.5 && bmiResult < 25) {
        setCategory("Normal weight");
      } else if (bmiResult >= 25 && bmiResult < 30) {
        setCategory("Overweight");
      } else if (bmiResult >= 30) {
        setCategory("Obese");
      }
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBMI("");
    setCategory("");
    setShow(true);
  };

  return (
    <div className={`bmi-calculator ${show ? "" : "hide"}`}>
      <div className="bmi-header">
        <h2>BMI Calculator</h2>
        <button onClick={handleClose} className="close-button">
          X
        </button>
      </div>
      <div className="input-fields">
        <div>
          <label htmlFor="weight">Weight (in kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height (in cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <div className="button-group">
        <button onClick={calculateBMI} className="calculate-button">
          Calculate BMI
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
      {bmi && (
        <div className="result">
          <p>Your BMI is {bmi}</p>
          <p>You are {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;

