import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type="submit"
        className="col-2 mx-1 btn btn-info"
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
