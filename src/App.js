import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [previousNum, setPreviousNum] = useState(0);
  const [operator, setOperator] = useState();
  //const [rememberResult, setRememberResult] = useState(0);

  function handleInput(event) {
    let input = event.target.value;
    setNumber(number + input);
  }

  function handleOperations(event) {
    let operatorInput = event.target.value;
    setOperator(operatorInput);
    setPreviousNum(number);
    setNumber(0);
  }

  function dealCulculation() {
    if(operator === "+") {
      setNumber(Number(previousNum) + Number(number));
    } else if(operator === "÷") {
      setNumber(Number(previousNum) / Number(number)); 
    } else if(operator === "*") {
      setNumber(Number(previousNum) * Number(number));
    } else if(operator === "-") {
      setNumber(Number(previousNum) - Number(number));
    }
  }

  function resetInputField() {
    setNumber(0);
  }
  
  /*function handleMemorization() {
    setRememberResult(result);
  }*/

  /*function handleShowingMemorizedValue() {
    setNumber(rememberResult);
    setResult("");
  }*/

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
                id="number-input"
              />
            </div>
          </div>
        </div>
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
              //onClick={handleMemorization}
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
              //onClick={handleShowingMemorizedValue}
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
              onClick={resetInputField}
              className="btn btn-primary clear"
            >
              Clear
            </button>
          </div>
          <div className="row mt-2 pb-4">
            <div className="col-4">
              <button
                type="button"
                value={0}
                onClick={handleInput}
                className="btn btn-primary last-row pl-3"
              >
                0
              </button>
            </div>
            <div className="col-4">
              <button
                type="button"
                onClick={dealCulculation}
                className="btn btn-primary last-row pl-3"
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
