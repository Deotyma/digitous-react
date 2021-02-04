import React from "react";

class Serch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
    };
  }
  updateCountryName = (event) => {
    this.setState({ countryName: event.target.value });
  };

  render() {
    return (
      <div className="add">
        <div className="row mt-3">
          <input
            type="text"
            className="col-10"
            onChange={this.updateCountryName}
          ></input>
          <button
            type="submit"
            className="btn btn-light mx-2"
            onClick={this.updateCountryName}
          >
            serch
          </button>
        </div>
      </div>
    );
  }
}

export default Serch;
