import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <h1>COUNTRY SELECTOR</h1>
        <div className="row">
          <Button>France</Button>
          <Button>Brasil</Button>
          <Button>Croatia</Button>
        </div>
      </div>
    );
  }
}

export default App;
