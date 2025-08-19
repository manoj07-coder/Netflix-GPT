import { useRef } from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const setLang = useSelector((store) => store.lang.language);
  const movie = useRef();

  return (
    <div className=" w-screen flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 flex mt-[10%]  bg-black"
      >
        <input
          ref={movie}
          type="text"
          placeholder={lang[setLang].placeholder}
          className="p-4 w-3/4 m-1 rounded-lg"
        />
        <button className="bg-[#E50914] m-1 rounded-lg text-white p-4 w-1/4 font-semibold text-xl">
          {lang[setLang].name}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
