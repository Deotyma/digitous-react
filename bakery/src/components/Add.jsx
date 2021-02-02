import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <div className="row mt-3">
          <input type="text" className="col-12"></input>
        </div>

        <input
          type="range"
          className="form-range col-12 my-2"
          id="disabledRange"
          min="1"
          max="10"
        ></input>
        <ul className="col-9">
          <li>tutaj beda produkty</li>
          <li>tutaj beda produkty</li>
          <li>tutaj beda produkty</li>
        </ul>
      </div>
    );
  }
}

export default Add;
