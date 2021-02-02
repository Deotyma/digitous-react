import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="my-3 ">Notre boulangerie</h1>
        <Add />
      </div>
    );
  }
}

export default App;
