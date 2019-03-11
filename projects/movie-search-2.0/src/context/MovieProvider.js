import React, { Component } from "react";
import axios from "axios";

const MovieContext = React.createContext()

class MovieProvider extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
    getMovies = (movieSearch) => {
        axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=b91ae162c3c6def04d513007fb30081e&language=en-US&query=${movieSearch}&include_adult=false`
      )
      .then(response =>{
        this.setState({
          movies: response.data.results
        })
      }).catch(error => console.log(error))
    }

  render() {
    return (
        <MovieContext.Provider value={{
            getMovies: this.getMovies,
            movies: this.state.movies,
            trendingMovies: this.state.trendingMovies
        }}>
            {this.props.children}
        </MovieContext.Provider>
    );
  }
}

export default MovieProvider;

export const withMovies = C => props => (
    <MovieContext.Consumer>
        {value => <C {...props}{...value}/>}
    </MovieContext.Consumer>
)
