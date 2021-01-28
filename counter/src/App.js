import React from "react";
import Counter from "./components/Counter";

import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }

  decrementCount = () =>{
    this.setState({count: this.state.count -1});
  }

  incrementCount = () =>{
    this.setState({count: this.state.count +1});
  }



  render() {
    return (
      <div className="App">
       <h1>Counter</h1>
      <Counter count={this.state.count} decrementCount ={this.decrementCount} incrementCount = {this.incrementCount}/>
      </div>
    );
  }
}

export default App;