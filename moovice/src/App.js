import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import PopularBattle from "./components/PobularBattle";
import Popular from "./components/Popular";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="navigation py-3">
            <Link to="/">
              <span className="m-1 navLink">Acceuil</span>
            </Link>

            <Link to={"weekly"}>
              <span className="m-1 navLink">Semaine</span>
            </Link>

            <Link to={"/weekly-battle"}>
              <span className="m-1 navLink">Top du semaine</span>
            </Link>

            <Link to={"/popular"}>
              <span className="m-1 navLink">Pépites</span>
            </Link>
            <Link to={"/popular-battle"}>
              <span className="m-1 navLink">Top de top</span>
            </Link>

            <Link to={"/favorites"}>
              <span className="m-1 navLink">Favorites</span>
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route path="/weekly" component={Weekly}></Route>

          <Route path="/weekly-battle" component={WeeklyBattle}></Route>

          <Route path="/popular" component={Popular}></Route>

          <Route path="/popular-battle" component={PopularBattle}></Route>

          <Route path="/favorites" component={Favorites}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
