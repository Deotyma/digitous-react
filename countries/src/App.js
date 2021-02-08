import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Serch from "./components/Serch";
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
  }

  componentDidMount() {
    this.getCountries("france");
  }

  getCountries(country) {
    let url = `https://restcountries.eu/rest/v2/name/${country}`;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log("resultat = ", result);
        this.setState({
          name: result[0].name,
          capital: result[0].capital,
          flag: result[0].flag,
          population: result[0].population,
          region: result[0].region,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-2">COUNTRY SELECTOR</h1>
        <div className="row justify-content-center my-2">
          <Button onClick={() => this.getCountries("france")}>France</Button>
          <Button onClick={() => this.getCountries("brasil")}>Brasil</Button>
          <Button onClick={() => this.getCountries("croatia")}>Croatia</Button>
        </div>
        <Serch
          updateCountryName={this.props.updateCountryName}
          onClick={(event) => this.getCountries(this.state.countryName)}
        ></Serch>
        <div className="col-6 align-self-center offset-3">
          <h1 className="text-center">{this.state.name}</h1>
          <img
            className="img-fluid col-6 offset-3"
            src={this.state.flag}
            alt={this.state.name}
          />
          <h2 className="text-center">Capital: {this.state.capital}</h2>
          <h2 className="text-center">Population: {this.state.population}</h2>
          <h2 className="text-center">Region: {this.state.region}</h2>
        </div>
      </div>
    );
  }
}

export default App;
