import React, { Component } from 'react';
import { withMovies } from "../context/MovieProvider.js";
import SearchForm from './SearchForm'
import { Link } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here



class SearchPage extends Component {
    componentDidMount() {
       this.props.getTrendingMovies()
   }
    render() {
        const mappedMovies = this.props.trendingMovies.map(movie => (
            < div style={{ margin: "0 5%" }} key={movie.id} >
                <Link to={`/movie/${movie.id}`}>
                    <h1>{movie.title !== undefined ? movie.title : movie.original_name}</h1>
                    <img
                        class="movie-image"
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path !== undefined ? movie.poster_path : movie.profile_path}`}
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
        )
    )
    
        return (
            <div>
                <SearchForm /> 
                <div className="grid-container">
                    {!this.props.movies.length && mappedMovies}
                    </div>
                <button onClick={this.props.getMovies}>< ScrollUpButton  style={{transform: 'rotate(90deg)'}}/></button>
            </div>
        );
    }
}

export default withMovies(SearchPage);