import React, { Component } from "react";
import axios from "axios";

const MovieContext = React.createContext()

class MovieProvider extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      trendingMovies: [],
      page: 1,
      search: '',
      movieSearch: ''
    };
  }
handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};
handleSubmit = e => {
  e.preventDefault();
  this.getMovies();
  this.setState({
    page: 0
  })
 
};
   getTrendingMovies = () => {
        axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=b91ae162c3c6def04d513007fb30081e`
      )
      .then(response =>{
        this.setState({
          trendingMovies: response.data.results
        })
      }).catch(error => console.log(error))
    }
  getMovies = () => {
        axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=b91ae162c3c6def04d513007fb30081e&language=en-US&query=${this.state.movieSearch}&page=${this.state.page}&include_adult=false`
      )
          .then(response => {
            this.setState(prevState =>({
            movies: response.data.results,
            page: prevState.page + 1,
            // search: prevState.search ? prevState.search : this.state.movieSearch
            movieSearch: prevState.movieSearch
          
        }))
      }).catch(error => console.log(error))
    }

  render() {

    return (
        <MovieContext.Provider value={{
            getMovies: this.getMovies,
            movies: this.state.movies,
            trendingMovies: this.state.trendingMovies,
            getTrendingMovies: this.getTrendingMovies,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
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
