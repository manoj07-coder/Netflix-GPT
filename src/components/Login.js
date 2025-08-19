import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleForm = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // signUp
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="absolute brightness-50" src={BG_URL} alt="" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 mx-auto left-0 right-0 bg-black w-3/12 p-10 text-white opacity-80 rounded-lg "
      >
        <h1 className="font-extrabold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg my-4 w-full bg-gray-900 border placeholder-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-3 rounded-lg my-4 w-full bg-gray-900 border placeholder-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-900 rounded-lg border placeholder-white"
        />
        <p className="text-red-500 font-bold py-2 ">{errorMessage}</p>
        <button
          className="rounded-lg bg-red-700 hover:bg-red-800 p-2 my-6 w-full font-bold"
          onClick={handleForm}
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className=" text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <span
            className="cursor-pointer font-semibold text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " Sign Up" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
