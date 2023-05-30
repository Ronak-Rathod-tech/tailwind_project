import React from "react";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        alert("You have successfully loged in !");
      },
    });

  console.log(errors);
  // console.log(Formik);
  // const navigate = useNavigate();
  // const onNavigate = () => {
  //   navigate("/welcome");
  // };

  return (
    <div className="md:container mx:auto px-96 pt-5">
      <div className="font-bold text-center bg-blue-200 text-white">
        Login here
      </div>
      <form onSubmit={handleSubmit}>
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
              name="email"
              id="email"
              autoComplete="off"
              placeholder="enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && touched.email ? (
              <p className="text-red-500">{errors.email}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.password && touched.password ? (
              <p className="text-red-500">{errors.password}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>

          <div className="mt-2">
            <p>
              Sign up here ?
              <Link className="text-blue-300 ms-2 underline" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
