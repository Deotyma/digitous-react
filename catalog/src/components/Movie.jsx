import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-4">
          <img src={this.props.filmImage} alt={this.props.filmTitle} />
        </div>
        <div className="col-6">
          <h1 className="text-center mt-1 text-decoration-underline">
            {this.props.filmTitle}
          </h1>
          <h2>Director: {this.props.filmDirector}</h2>
          <h3 className="text-decoration-underline">Actors:</h3>
          {this.props.filmStars.map((star) => {
            return <h3>{star}</h3>;
          })}
          <h4 className="text-decoration-underline">Description:</h4>
          <p>{this.props.filmDescription}</p>
        </div>
      </div>
    );
  }
}

export default Movie;
