import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <div className="row mt-3">
          <input type="text" className="col-10"></input>
          <button type="submit" className="btn btn-light mx-2">
            Ajouter
          </button>
        </div>
        <p className="my-2">
          <span>1</span>€
        </p>

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
