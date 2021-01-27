import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  decrementCount = () =>{
    this.setState({count: this.state.count--});
    console.log(this.setState.count);
  }

  incrementCount = () =>{
    this.setState({count: this.state.count++});
    console.log(this.setState.count);
  }



  render() {
    return (
      <div className="App">
       <h1>Counter</h1>
       <h2>{this.state.count}</h2>
       <button onClick={this.incrementCount}>+</button>
       <button onClick={this.decrementCount}>-</button>
       

      </div>
    );
  }
}

export default App;