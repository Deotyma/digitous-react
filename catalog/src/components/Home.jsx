import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="App container">
        <h1 className="text-center my-3">Catalog</h1>
        <div className="row">
          {this.props.films.map((film) => {
            return (
              <div className="col-3">
                <Link to={`/movie/${film.id - 1}`}>
                  <img
                    className="catalogImage"
                    src={film.image}
                    alt={film.title}
                  />
                </Link>
                <h2 className="mt-2">{film.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
