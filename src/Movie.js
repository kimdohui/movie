import React from "react";
import "./Movie.css";
import propTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Column">
        <h1>{title}</h1>

        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie_Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            baseOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

/*
class MoviePoster extends Component {
  static propTypes = {
    poster: propTypes.string.isRequired
  };

  render() {
    return <img src={this.props.poster} alt="Mpvie Poster" />;
  }
}
*/

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie_Poster" />;
}

Movie.propTypes = {
  genres: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  synopsis: propTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired,
  alt: propTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: propTypes.string.isRequired
};

export default Movie;
