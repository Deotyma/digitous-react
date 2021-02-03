import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: 1,
    };
  }
  updateProductName = (event) => {
    console.log(event.target.value);
    this.setState({ productName: event.target.value });
  };

  updatePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  render() {
    return (
      <div className="add">
        <div className="row mt-3">
          <input
            type="text"
            className="col-10"
            onChange={this.updateProductName}
          ></input>
          <button type="submit" className="btn btn-light mx-2">
            Ajouter
          </button>
        </div>
        <p className="my-2">
          <span>{this.state.price}</span>€
        </p>

        <input
          type="range"
          className="form-range col-12 my-2"
          id="disabledRange"
          min="1"
          max="10"
          value={this.state.price}
          onChange={this.updatePrice}
        ></input>
      </div>
    );
  }
}

export default Add;
