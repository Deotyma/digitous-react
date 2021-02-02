import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="my-3 ">Notre boulangerie</h1>
        <div className="buttons">
          <button type="submit" className="btn btn-light mx-2">
            Ajouter
          </button>
          <button type="submit" className="btn btn-light mx-2">
            List
          </button>
          <button type="submit" className="btn btn-light mx-2">
            Payment
          </button>
        </div>
        <Add />
      </div>
    );
  }
}

export default App;
