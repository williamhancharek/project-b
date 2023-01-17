import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [clear, setClear] = useState(false);
  const [rememberResult, setRememberResult] = useState(0);
  const [showRememberedResult, setShowRememberedResult] = useState(0);

  function handleInput(event) {
    setInput(event.target.value);
    setClear(event.target.value);
  }

  function handleSum() {
    let number = Number(input);
    let secondNumber = Number(result);
    let sum = number + secondNumber;
    setResult(sum);
  }

  function resetInputField() {
    setClear(true);
    setResult(0);
  }

  function handleSubtr() {
    let number = Number(input);
    let secondNumber = Number(result);
    let subtraction = secondNumber - number;
    setResult(subtraction);
  }

  function handleMult() {
    let number = Number(input);
    let secondNumber = Number(result);
    let multiplication = number * secondNumber;
    setResult(multiplication);
  }

  function handleDivision() {
    let number = Number(input);
    let secondNumber = Number(result);
    let division = secondNumber / number;
    setResult(division);
  }

  function handleMemorization() {
    setRememberResult(result);
    console.log(result)
  }

  function displayMemorised() {
   setShowRememberedResult(rememberResult);
   console.log(rememberResult)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Form Calculator</h1>
        <p>{showRememberedResult}</p>
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
            <button onClick={handleSum} className="btn btn-primary">
              +
            </button>
            <button
              type="submit"
              onClick={resetInputField}
              className="btn btn-primary clear pl-3"
            >
              Clear
            </button>

            <div className="row">
              <div className="col-2 mt-2">
                <button
                  type="submit"
                  onClick={handleSubtr}
                  className="btn btn-primary"
                >
                  -
                </button>
              </div>
              <div className="col-10 mt-2">
                <button
                  type="submit"
                  onClick={handleMemorization}
                  className="btn btn-primary"
                >
                  Memo
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-2 mt-2">
                <button onClick={handleMult} className="btn btn-primary">
                  *
                </button>
              </div>
              <div className="col-10 mt-2">
                <button
                  type="submit"
                  onClick={displayMemorised}
                  className="btn btn-primary"
                >
                  DM
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col mt-2">
                <button onClick={handleDivision} className="btn btn-primary">
                  /
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
