import React from "react";
import { Link } from "react-router-dom";
import { withMovies } from "../context/MovieProvider.js";

const Movie = props => {
  let currentMovie = props.movies.find(
    movie => movie.id.toString() === props.match.params.movieId
  );
  return (
    <div>
      <Link to="/">
        <i class="fa fa-arrow-left" />
      </Link>
      <h1
        style={{ textAlign: "center", fontSize: "5vw", paddingBottom: "25px" }}
      >
              {currentMovie.title !== undefined ? currentMovie.title : currentMovie.original_name}
      </h1>
      <div
        // style={{ display: "flex", justifyContent: "center", margin: "0 15%" }}
              className='movie'
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${currentMovie.poster_path}`}
            alt=""
          />
        </div>
        <div style={{ padding: "0 25px" }}>
          <p>{currentMovie.overview}</p>
          <br />
          <p>
            Rating: 
            {currentMovie.vote_average !== 0
              ? currentMovie.vote_average * 10 + "%"
              : "N/A"}
            - {currentMovie.vote_count} voters
          </p>
       <br></br>
                  <p>Release Date: {currentMovie.release_date !== undefined ? currentMovie.release_date : currentMovie.first_air_date }</p>
        </div>
      </div>
      {/* <Link to="/">
        <i class="fa fa-arrow-left" />
      </Link> */}
    </div>
  );
};

export default withMovies(Movie);
