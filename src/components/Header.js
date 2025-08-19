import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO_URL } from "../utils/constants";
import { setShowGptPage } from "../utils/gptSlice";
import { setLang } from "../utils/langSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const toggleShowSearchPage = () => {
    dispatch(setShowGptPage());
  };

  const setLangOption = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center">
      <div>
        <img className="mx-20 my-6 w-44" src={LOGO_URL} alt="logo" />
      </div>
      <div>
        {user && (
          <div className="flex p-8">
            {showGpt === true && (
              <select
                className="mx-4 p-2 bg-transparent text-white"
                onChange={setLangOption}
              >
                <option className="text-black" value="English">
                  English
                </option>
                <option className="text-black" value="Kannada">
                  Kannada
                </option>
                <option className="text-black" value="Hindi">
                  Hindi
                </option>
                <option className="text-black" value="Spanish">
                  Spanish
                </option>
              </select>
            )}

            <button
              className="bg-purple-700 rounded-lg p-4 text-white font-bold"
              onClick={toggleShowSearchPage}
            >
              {showGpt === true ? "Home" : "GPT Search"}
            </button>
            <img className="w-12 mx-4" src={user.photoURL} alt="Profile" />
            <button
              className="bg-[#E50914] text-white p-2 rounded-lg font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
