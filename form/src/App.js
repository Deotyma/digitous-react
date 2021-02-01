import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Submitted from "./components/Submitted";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  passwordValid = () => {
    console.log("password");
  };

  render() {
    return (
      <div className="App">
        <Submitted />
        <Form passwordValid={this.passwordValid} />
      </div>
    );
  }
}

export default App;
