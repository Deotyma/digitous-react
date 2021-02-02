import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Submitted from "./components/Submitted";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validMail: false,
      validPassword: false,
      email: "",
      password: "",
      click: false,
      rememberMe: false,
    };
    this.submittedForm = this.submittedForm.bind(this);
    this.emailValid = this.emailValid.bind(this);
    this.passwordValid = this.passwordValid.bind(this);
  }

  emailValid = (event) => {
    console.log("email");
    const newEmail = event.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail);

    this.setState({
      email: newEmail,
      emailValid: isEmail,
    });
  };

  passwordValid = (event) => {
    console.log("password");
    let newPasswordValid = false;
    if (event.target.value.length >= 6) {
      newPasswordValid = true;
    } else {
      newPasswordValid = false;
    }

    this.setState({
      password: event.target.value,
      passwordValid: newPasswordValid,
    });
  };

  submittedForm = () => {
    console.log("ça y est");
  };

  render() {
    return (
      <div className="App">
        <Form
          submittedForm={this.submittedForm}
          emailValid={this.emailValid}
          passwordValid={this.passwordValid}
        />
      </div>
    );
  }
}

export default App;
