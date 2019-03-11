import React, { Component } from "react";
import { withMovies } from "../context/MovieProvider.js";
import { Link } from "react-router-dom";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      movieSearch: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getMovies(this.state.movieSearch);
    this.setState({
      movieSearch: ""
    });
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="form">
          <h2 style={{ margin: 0, textAlign: "center", padding: "25px" }}>
            Search for Movies
          </h2>
          <form
            style={{ display: "flex", justifyContent: "center" }}
            onSubmit={this.handleSubmit}
          >
            <input
              style={{ width: "500px", border: "none" }}
              type="text"
              placeholder="Avengers"
              name="movieSearch"
              value={this.state.movieSearch}
              onChange={this.handleChange}
            />
            <button
              style={{ background: "none", border: "none", color: "white" }}
            >
              <i class="fa fa-search" />
            </button>
          </form>
        </div>
        <div>
          <p style={{ textAlign: "right", paddingRight: "25px" }}>
            Results: {this.props.movies.length}
          </p>
          <div className="grid-container">
            {this.props.movies.map(movie => (
              <div style={{ margin: "0 5%" }} key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <h1 style={{ textAlign: "center" }}>{movie.title !== undefined ? movie.title : movie.original_name}</h1>
                  <p style={{ textAlign: "center" }}>{movie.media_type.toUpperCase()}</p> 
                  <img
                    class="movie-image"
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path !== undefined ? movie.poster_path : movie.profile_path }`}
                    alt=""
                  />
                </Link>
                <p>
                  Rating:{" "}
                  {movie.vote_average !== 0
                    ? movie.vote_average * 10 + "%"
                    : "N/A"}
                  - {movie.vote_count} voters
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withMovies(SearchForm);
