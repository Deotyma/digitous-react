import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="App container">
        <button type="button" className="col-2 mx-1 btn btn-info">
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
