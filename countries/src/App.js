import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Card from "./components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then((result) => result.json())
      .then((name) => this.setState({ name: name }))
      .then((capital) => this.setState({ capital: capital }))
      .then((flag) => this.setState({ flag: flag }))
      .then((population) => this.setState({ population: population }))
      .then((region) => this.setState({ region: region }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-2">COUNTRY SELECTOR</h1>
        <div className="row justify-content-center my-2">
          <Button>France</Button>
          <Button>Brasil</Button>
          <Button>Croatie</Button>
        </div>
        <div className="row justify-content-center my-2">
          <h1>{this.state.name}</h1>
          <img src={this.state.flag} alt={this.state.name} />
          <h2>{this.state.capital}</h2>
          <h2>{this.state.population}</h2>
          <h2>{this.state.region}</h2>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
