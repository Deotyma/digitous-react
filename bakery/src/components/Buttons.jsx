import React from "react";

class Buttons extends React.Component {
  render() {
    return (
      <button
        className={this.props.isSelected}
        onClick={this.props.onClick}
        type="submit"
      >
        {this.props.children}
      </button>
    );
  }
}

export default Buttons;
