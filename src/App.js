import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [clear, setClear] = useState(false);

  function handleInput(event) {
    setInput(event.target.value);
    setClear(event.target.value);
  }

  let number = Number(input);
  let secondNumber = Number(result);

  function handleSum(event) {
    event.preventDefault();
    let summing = number + secondNumber;
    setResult(summing);
  }

  function resetInputField() {
    setClear(true);
    setResult(0);
    setInput(0);
  }

  function handleSubstr() {
    let substraction = secondNumber - number;
    setResult(substraction);
  }

  function handleMult() {
    let multiplication = number * secondNumber;
    setResult(multiplication);
  }

  function handleDivision() {
    let division = secondNumber / number;
    setResult(division);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Form Calculator</h1>
        <div className="row">
          <div className="col-3">
            <div className="form-group form-group-warning">
              <input
                type="text"
                className="form-control"
                id="result-input"
                value={result}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group form-group-warning">
              <input
                type="number"
                value={clear}
                placeholder="Enter a number"
                className="form-control"
                id="number-input"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="btn-group">
            <button onClick={handleSum} className="btn btn-primary">
              Sum
            </button>
            <button
              type="submit"
              onClick={resetInputField}
              className="btn btn-primary pl-3"
            >
              Clear
            </button>
          </div>
          <div className="row">
            <div className="col mt-2">
              <button
                type="submit"
                onClick={handleSubstr}
                className="btn btn-primary"
              >
                Substr
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mt-2">
              <button onClick={handleMult} className="btn btn-primary">
                Mult
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mt-2">
              <button onClick={handleDivision} className="btn btn-primary">
                Div
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
