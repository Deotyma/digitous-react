import React from "react";
import Box from "./components/Box";
import "./App.css";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      water: 0,
      heart: 120,
      temperature:10,
      steps: 3000
    }
  }
  /* constructor(props) {
    super(props);
    this.state = {
      box: [
        {
          name: "Water",
          icon: "local_drink",
          color: "#3A85FF",
          value: 1.5,
          unit: "L",
        },
        {
          name: "Steps",
          icon: "directions_walk",
          color: "black",
          value: 3000,
          unit: "steps",
        },
        {
          name: "Heart",
          icon: "favorite",
          color: "red",
          value: 120,
          unit: "bpm",
        },
        {
          name: "Temperature",
          icon: "wb_sunny",
          color: "yellow",
          value: -10,
          unit: "°C",
        },
      ],
    };
  }
 */
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box toto="water" icon={"local_drink"} color={"#3A85FF"} value={1.5} unit="L" />
          <Box toto="steps" icon={"directions_walk"} color={"black"} value={3000} unit="steps" min={stepsMin} max={stepsMax} />
          <Box toto="heart" icon={"favorite"} color={"red"} value={120} unit="bpm" min={heartMin} max={heartMax}/>
          <Box toto="temperature" icon={"wb_sunny"} color={"yellow"} value={-10} unit="°C" min={tempMin} max={tempMax}/>

          {/* {this.state.box.map(function (box) {
            return (
              <Box
                name={box.name}
                icon={box.icon}
                color={box.color}
                value={box.value}
                unit={box.unit}
              />
            );
          })} */}
        </div>
      </div> /* end container fluid */
    );
  }
}

export default App;
