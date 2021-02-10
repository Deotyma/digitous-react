import React from "react";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    let url =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e6518e67714e9044605198a5d76685a3";
    fetch(url)
      .then((result) => result.json())
      .then((filmsFromApi) => {
        console.log("resultat = ", filmsFromApi);
        this.setState({
          movies: filmsFromApi,
        });
      });
  }

  render() {
    return (
      <main>
        <div className="container"></div>
      </main>
    );
  }
}
export default Popular;
