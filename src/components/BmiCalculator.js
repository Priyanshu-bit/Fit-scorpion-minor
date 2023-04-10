import React, { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    if (!height || !weight) {
      alert('Please enter your height and weight');
      return;
    }

    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label htmlFor="height-input">Height (cm):</label>
        <input
          type="number"
          id="height-input"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight-input">Weight (kg):</label>
        <input
          type="number"
          id="weight-input"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Calculate</button>
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  );
};

export default BmiCalculator;
