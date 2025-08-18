import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { addVideoData } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useVideoData = (movieId) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();

    const filteredTrailer = json.results.filter(
      (video) => (video.type = "Trailer")
    );
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : filteredTrailer;
    dispatch(addVideoData(trailer));
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useVideoData;
