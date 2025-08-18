const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video py-44 px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{original_title}</h1>
      <p className="text-lg w-1/4 my-3 ">{overview}</p>
      <div className="mt-8">
        <button className="bg-white py-4 px-14 rounded-lg text-black hover:opacity-80 font-bold text-lg cursor-pointer">
          ► Play
        </button>
        <button className="mx-2 bg-gray-500 py-4 px-14 rounded-lg hover:opacity-80 text-white font-bold text-lg cursor-pointer">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
