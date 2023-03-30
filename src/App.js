import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [previousNum, setPreviousNum] = useState();
  const [operator, setOperator] = useState();

  function handleInput(event) {
    const input = event.target.value;
    setNumber(number + input);
  }

  function handleOperations(event) {
    const operatorInput = event.target.value;
    setOperator(operatorInput);
    setPreviousNum(number);
    setNumber("");
  }

  function handleCalculation() {
    let result = "";
    if (operator === "+") {
      result = Number(previousNum) + Number(number);
      console.log(setNumber)
    } else if (operator === "÷") {
      result = Number(previousNum) / Number(number);
    } else if (operator === "*") {
      result = Number(previousNum) * Number(number);
    } else if (operator === "-") {
      result = Number(previousNum) - Number(number);
    }

    setNumber(result.toString());
    setPreviousNum("");
    setOperator("")
  }

  function resetInputField() {
    setNumber("");
  }

  function handleSignChanging() {
    if(number > 0) {
      setNumber(-number)
    } else {
      setNumber(number)
    }
  }

  function handlePercentage() {
    setNumber(number/100);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Calculator</h1>
        <div className="row">
          <div className="col">
            <div className="form-group form-group-warning">
              <input
                type="text"
                className="form-control"
                value={number}
                readOnly={true}
                id="number-input"
              />
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <div className="row mt-2">
            <div className="col-2">
              <button
                type="button"
                value={7}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                7
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={8}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                8
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={9}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                9
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={handleOperations}
                value={"+"}
                className="btn btn-primary"
              >
                +
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={resetInputField}
                className="btn operations"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-2">
              <button
                type="button"
                value={4}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                4
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={5}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                5
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={6}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                6
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={"÷"}
                onClick={handleOperations}
                className="btn btn-primary"
              >
                ÷
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={handleSignChanging}
                className="btn operations"
              >
                +/-
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-2">
              <button
                type="button"
                value={1}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                1
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={2}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                2
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={3}
                onClick={handleInput}
                className="btn btn-primary pl-3"
              >
                3
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                value={"*"}
                onClick={handleOperations}
                className="btn btn-primary"
              >
                *
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={handlePercentage}
                className="btn operations"
              >
                %
              </button>
            </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <button
                  type="button"
                  value={0}
                  onClick={handleInput}
                  className="btn btn-primary"
                >
                  0
                </button>
              </div>
              <div className="col-2">
                <button
                  type="button"
                  value={"."}
                  onClick={handleInput}
                  className="btn btn-primary"
                >
                  .
                </button>
              </div>
              <div className="col-2">
                <button
                  type="button"
                  onClick={handleCalculation}
                  className="btn btn-primary"
                >
                  =
                </button>
              </div>
              <div className="col-2">
                <button
                  type="button"
                  value={"-"}
                  onClick={handleOperations}
                  className="btn btn-primary"
                >
                  -
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
  );
}
