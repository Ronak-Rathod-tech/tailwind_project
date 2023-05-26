import React from "react";
import Welcome from "./Welcome";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("<welcome />");
  };

  return (
    <div>
      <div className="font-bold text-center bg-blue-200 text-white">
        Login here
      </div>
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="enter email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="enter password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={onNavigate}
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
