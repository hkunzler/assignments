import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const search = this.input.value;
    this.componentDidMount(search);
  }
  componentDidMount(search) {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=b91ae162c3c6def04d513007fb30081e&query=" +
          search
      )
      .then(response =>
        this.setState({
          movies: response.data.results
        })
      );
  }
  render() {
    const { movies } = this.state;
    const movieList = movies.map(movie => (
      <div>
        <img
          src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
          className="movieImg"
        />
        <p className="overview">{movie.overview}</p>
        <h3 className="text-center movieTitle">{movie.overview}</h3>
      </div>
    ));
    return (
        <div>
            <h1>Search Movies</h1>
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholer="Avengers"
                    ref={input => (this.input = input)}
                />
            </form>
            <div>
                <ul>{movieList}</ul>
            </div>
        </div>
    );
  }
}

export default App;
