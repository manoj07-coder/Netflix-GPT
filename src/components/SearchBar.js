import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const setLang = useSelector((store) => store.lang.language);

  return (
    <div className=" w-screen flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 flex mt-[10%]"
      >
        <input
          type="text"
          placeholder={lang[setLang].placeholder}
          className="p-4 w-3/4"
        />
        <button className="bg-[#E50914] text-white p-4 w-1/4 font-semibold text-xl">
          {lang[setLang].name}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
