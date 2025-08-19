import React from "react";
import { BG_URL } from "../utils/constants";
import SearchBar from "./SearchBar";

const GptSearch = () => {
  return (
    <div>
      <img className="absolute brightness-50 -z-10" src={BG_URL} alt="" />
      <SearchBar />
    </div>
  );
};

export default GptSearch;
