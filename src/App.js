import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [input, setInput] = useState(0);

  function handleInput(event) {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(input)
  }
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit} className="search-form" id="search-form">
          <div className="row">
            <div className="col-3">
              <div className="form-group form-group-warning">
                <input type="text" className="form-control" id="number-input" />
              </div>
            </div>
            <div className="col-3">
              <div className="form-group form-group-warning">
                <input
                  type="text"
                  placeholder="Enter a number"
                  className="form-control"
                  id="number-input"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="col-3">
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-primary pl-3">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
