import React from "react";

class Add extends React.Component {
  render() {
    return (
      <div className="add">
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
        <div className="row mt-3">
          <input type="text" className="col-12"></input>
        </div>
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
