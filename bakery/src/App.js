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
      items: [],
    };
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  selectAdd(e) {
    this.setState({
      activeTab: "add",
    });
  }
  selectList(e) {
    this.setState({
      activeTab: "list",
    });
  }
  selectPay(e) {
    this.setState({
      activeTab: "pay",
    });
  }

  renderContent() {
    if (this.state.activeTab === "add") {
      return <Add></Add>;
    }
    if (this.state.activeTab === "list") {
      return <List></List>;
    }
    if (this.state.activeTab === "pay") {
      return <Pay></Pay>;
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-3 ">Notre boulangerie</h1>
        <div className="buttons row">
          <Buttons
            onClick={this.selectAdd}
            isSelected={
              this.state.activeTab === "add"
                ? "form-control col-2 mx-1 btn btn-primary"
                : "form-control col-2 mx-1 btn btn-outline-secondary"
            }
          >
            Acheter
          </Buttons>
          <Buttons
            onClick={this.selectList}
            isSelected={
              this.state.activeTab === "list"
                ? "form-control col-2 mx-1 btn btn-primary"
                : "form-control col-2 mx-1 btn btn-outline-secondary"
            }
          >
            List
          </Buttons>

          <Buttons
            onClick={this.selectPay}
            isSelected={
              this.state.activeTab === "pay"
                ? "form-control col-2 mx-1 btn btn-primary"
                : "form-control col-2 mx-1 btn btn-outline-secondary"
            }
          >
            Payement
          </Buttons>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
