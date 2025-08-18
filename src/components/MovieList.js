import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="mb-6 px-14 text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className=" py-2 ">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
