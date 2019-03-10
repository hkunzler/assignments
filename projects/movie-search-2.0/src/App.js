import React, { Component } from "react";
// import "./style.css";
import {withMovies} from './context/MovieProvider'
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ''
    };
  }
handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
      this.props.getMovies(this.state.movieSearch)
      this.setState({
          movieSearch: ''
      })
  }
  render() {
    return (
        <div>
            <h2>Search for Movies</h2>
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholer="Avengers"
                    name='movieSearch'
                    value={this.state.movieSearch}
                    onChange={this.handleChange}
                />
                <button>Search</button>
            </form>
            <div>
                {this.props.movies.map(movie =>
                    <div>
                       <h1>{movie.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <p>{movie.overview}</p>
                    </div>
                    )}
            </div>
        </div>
    );
  }
}

export default withMovies(App);
