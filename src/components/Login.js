import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute my-36 mx-auto left-0 right-0 bg-black w-3/12 p-10 text-white opacity-80 rounded-lg">
        <h1 className="font-extrabold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg my-4 w-full bg-gray-900 border "
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-3 rounded-lg my-4 w-full bg-gray-900 border "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-900 rounded-lg border "
        />
        <button className="rounded-lg bg-red-600 hover:bg-red-800 p-2 my-6 w-full font-bold">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="cursor-pointer text-gray-400">
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
