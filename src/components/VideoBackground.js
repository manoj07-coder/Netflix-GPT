import React from "react";
import useVideoData from "../hooks/useVideoData";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useVideoData(movieId);

  const videoData = useSelector((store) => store.movies?.videoData);
  if (!videoData) return;

  const { key } = videoData;
  console.log(key);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          key
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
