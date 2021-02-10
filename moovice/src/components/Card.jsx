import React from "react";

class Card extends React.Component {
  render() {
    /* const { filmTitle } = this.props; */
    return (
      <div className="white col-4">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w300/${this.props.filmTitle.poster_path}`}
          alt={this.props.filmTitle.title}
        />
        <h2>{this.props.filmTitle.title} </h2>
        <h3>{this.props.filmTitle.release_date}</h3>
        <h4>Description:</h4>
        <p>{this.props.filmTitle.overview}</p>
      </div>
    );
  }
}
export default Card;
