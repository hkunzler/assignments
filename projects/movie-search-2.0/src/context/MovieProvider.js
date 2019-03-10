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
        `https://api.themoviedb.org/3/search/movie?api_key=b91ae162c3c6def04d513007fb30081e&query=${movieSearch}`
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
            movies: this.state.movies
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