import React, { Component } from "react";
import "./styles.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({ movies });
  };

  _callApi = () => {
    return fetch(
      "https://yts.mx/api/v2/list_movies.json%20sort_by=download count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className={this.state.movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
