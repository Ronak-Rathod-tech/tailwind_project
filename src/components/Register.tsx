import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../registerSchema";
import { Link } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  password: "",
  confirmpassword: "",
  gender: "",
  checkbox: false,
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        alert("You have successfully register !");
      },
    });
  console.log(errors);

  return (
    <div className="md:container mx:auto px-96 pt-5">
      <div className="font-bold text-center bg-blue-200 text-white">
        Register here
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="fname"
              autoComplete="off"
              placeholder="enter first name"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.firstname && touched.firstname ? (
              <p className="text-red-500">{errors.firstname}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lname"
              autoComplete="off"
              placeholder="enter last name"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.lastname && touched.lastname ? (
              <p className="text-red-500">{errors.lastname}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="mobile"
            >
              Mobile
            </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              autoComplete="off"
              placeholder="enter mobile number"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.mobile && touched.mobile ? (
              <p className="text-red-500">{errors.mobile}</p>
            ) : null}
          </div>
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

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="confirmpassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              autoComplete="off"
              placeholder="confirm password"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.confirmpassword && touched.confirmpassword ? (
              <p className="text-red-500">{errors.confirmpassword}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
            <br></br>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
            <br></br>
            <input
              type="radio"
              id="other"
              name="gender"
              value="Other"
              onChange={handleChange}
            />
            Other
            {errors.gender && touched.gender ? (
              <p className="text-red-500">{errors.gender}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={handleChange}
            />
            <label className="ms-2" htmlFor="confirmation">
              are you sure entered valid details ?
            </label>
            {errors.checkbox && touched.checkbox ? (
              <p className="text-red-500">{errors.checkbox}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>

          <div className="mt-2">
            <p>
              you have already account ?
              <Link className="text-blue-300 ms-2 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
