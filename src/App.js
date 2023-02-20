import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [rememberResult, setRememberResult] = useState(0);

  function handleSum() {
    let number = Number(input);
    let secondNumber = Number(result);
    let sum = number + secondNumber;
    setResult(sum);
    setInput("");
  }

  function resetInputField() {
    setResult(0);
    setInput(0);
  }

  function handleSubtr() {
    let number = Number(input);
    let secondNumber = Number(result);
    let subtraction = secondNumber - number;
    setResult(subtraction);
    setInput(0);
  }

  function handleMult() {
    let number = Number(input);
    let secondNumber = Number(result);
    let multiplication = number * secondNumber;
    setResult(multiplication);
    setInput("");
  }

  function handleDivision() {
    let number = Number(input);
    let secondNumber = Number(result);
    let division = secondNumber / number;
    setResult(division);
    setInput("");
  }

  function handleMemorization() {
    setRememberResult(result);
  }

  function handleShowingMemorizedValue() {
    setInput(rememberResult);
    setResult("");
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Calculator</h1>
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
                type="text"
                className="form-control"
                value={input}
                id="number-input"
              />
            </div>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={handleSum}
              className="btn btn-primary"
            >
              +
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={resetInputField}
              className="btn btn-primary clear"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-2">
            <button
              type="button"
              value="7"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              7
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="8"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              8
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="9"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              9
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={handleDivision}
              className="btn btn-primary"
            >
              ÷
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={handleMemorization}
              className="btn btn-primary"
            >
              Memo
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-2">
            <button
              type="button"
              value="4"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              4
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="5"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              5
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="6"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              6
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={handleMult}
              className="btn btn-primary"
            >
              *
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={handleShowingMemorizedValue}
              className="btn btn-primary"
            >
              DM
            </button>
          </div>
        </div>
        <div className="row mt-2 pb-4">
          <div className="col-2">
            <button
              type="button"
              value="1"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              1
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="2"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              2
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="3"
              onClick={handleInput}
              className="btn btn-primary pl-3"
            >
              3
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={handleSubtr}
              className="btn btn-primary"
            >
              -
            </button>
          </div>
          <div className="row mt-2 pb-4">
            <div className="col-4">
              <button
                type="button"
                value="0"
                onClick={handleInput}
                className="btn btn-primary last-row pl-3"
              >
                0
              </button>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-primary last-row pl-3">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
