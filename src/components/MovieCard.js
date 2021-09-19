import React from "react";
import { Link } from "react-router-dom";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.title}`}>
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        />

      <MovieControls type={type} movie={movie} />
      </Link>
    </div>
  );
};
