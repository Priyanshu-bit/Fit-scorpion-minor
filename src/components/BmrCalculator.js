import React, { useState } from "react";
import { Alert } from 'react-alert'
import './BmrCalculator.css'


const BmrCalculator=()=> {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [bmr, setBMR] = useState("");
  const [show, setShow] = useState(true);

  const activityLevelFactors = {
    sedentary: 1.2,
    lightlyActive: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extraActive: 1.9,
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let bmrValue = 0;
    if (gender === "male") {
      bmrValue = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else if (gender === "female") {
      bmrValue = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }
    bmrValue *= activityLevelFactors[activityLevel];
    setBMR(bmrValue.toFixed(2));
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleReset = () => {
    setAge("");
    setGender("");
    setWeight("");
    setHeight("");
    setActivityLevel("");
    setBMR("");
  };

  return (
    <div className={`bmi-calculator ${show ? "" : "hide"}`}>
    <div className="App">
    
      <h1>BMR Calculator</h1>
      <button onClick={handleClose} className="close-button">
          X
        </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Daily Physical Activity Level</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightlyActive">Lightly Active</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="veryActive">Very Active</option>
            <option value="extraActive">Extra Active</option>
          </select>
        </div>
        <button type="submit">Calculate BMR</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {bmr && (
        <div className="output">
          <p>Your BMR is {bmr})</p>
         
        </div>
      
      )}
    </div>
    </div> 
  );
};

export default BmrCalculator;
       
