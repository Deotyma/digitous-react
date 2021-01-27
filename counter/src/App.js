import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0
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
       <div className="counter" >
       <button onClick={this.decrementCount}>-</button>
       <h2>{this.state.count}</h2>
       <button onClick={this.incrementCount}>+</button>
       </div>
       
    
      </div>
    );
  }
}

export default App;