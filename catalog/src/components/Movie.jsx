import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <img src="" alt="" />
        </div>
        <div className="com-6">
          <h1 className="mt-1">{this.props.filmTitle}</h1>
        </div>
      </div>
    );
  }
}

export default Movie;
