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

  function handleSubmit(event) {
    event.preventDefault();
    let number = Number(input);
    let secondNumber = Number(result);
    let summing = number + secondNumber;
    let substriction = secondNumber - number;
    let multiplication = number * secondNumber;
    let division = secondNumber / number;
    setResult([summing, substriction, multiplication, division]);
  }

  function resetInputField() {
    setClear(true);
    setResult(0);
    setInput(0);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Form Calculator</h1>
        <form onSubmit={handleSubmit} className="search-form" id="search-form">
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
              <button className="btn btn-primary">Add</button>
              <button
                type="submit"
                onClick={resetInputField}
                className="btn btn-primary pl-3"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
