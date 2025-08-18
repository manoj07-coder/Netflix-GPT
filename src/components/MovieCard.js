import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 flex-shrink-0">
      <img alt="movie-poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
