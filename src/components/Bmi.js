import React from "react";
import { useState } from "react";
import BmiCalculator from "./BmiCalculator";

const Bmi = () => {
  const [bmiValue, setBmiValue] = useState(0);

  return (
    <>
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="card text-center">
            <div className="card-header bg-secondary text-white">
              BMI Calculator
            </div>
            <span>Body Mass Index (BMI) ={bmiValue}</span>
            <BmiCalculator getBmiValue={setBmiValue} />
            <div className="card-footer bg-primary text-white">-</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmi;
