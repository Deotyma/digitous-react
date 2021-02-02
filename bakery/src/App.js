import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Buttons from "./components/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-3 ">Notre boulangerie</h1>
        <div className="buttons row">
          <Buttons
            isSelected={
              this.state.activeTab === "add"
                ? "form-control col-2 btn btn-primary"
                : "form-control col-2 btn btn-outline-secondary"
            }
          >
            Add
          </Buttons>
          <Buttons
            isSelected={
              this.state.activeTab === "list"
                ? "form-control col-2 btn btn-primary"
                : "form-control col-2 btn btn-outline-secondary"
            }
          >
            List
          </Buttons>

          <Buttons
            isSelected={
              this.state.activeTab === "pay"
                ? "form-control col-2 btn btn-primary"
                : "form-control col-2 btn btn-outline-secondary"
            }
          >
            Pay
          </Buttons>
        </div>
        <Add />
      </div>
    );
  }
}

export default App;
