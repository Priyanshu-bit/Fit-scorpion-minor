import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleCalculateBmi = () => {
    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setBmi(bmiValue);
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
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
      <button onClick={handleCalculateBmi}>Calculate</button>
      {bmi && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>
            Interpretation:{' '}
            {bmi < 18.5
              ? 'Underweight'
              : bmi < 25
              ? 'Normal weight'
              : bmi < 30
              ? 'Overweight'
              : 'Obese'}
          </p>
        </div>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default BmiCalculator;
