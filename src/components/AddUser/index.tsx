import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    age: "",
  });

  const navigat = useNavigate();

  function handleSubmit(event: any) {
    event.preventDefault();

    axios
      .post("http://localhost:3004/users", data)
      .then((res) => {
        alert("Data added successfully!");
        navigat("/");
      })
      .catch((err) => console.log(err));
  }

  let name, value, address, mobile, email, age;

  const handleInputs = (e: any) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <div className="md:container mx:auto px-96 pt-5">
      <div className="font-bold text-center bg-blue-200 text-white">
        Add User
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="enter name"
              value={name}
              onChange={handleInputs}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline form-control"
            />
            {/* {errors.name && touched.name ? (
              <p className="text-red-500">{errors.name}</p>
            ) : null} */}
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="ad"
              autoComplete="off"
              placeholder="enter address"
              value={address}
              onChange={handleInputs}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline form-control"
            />
            {/* {errors.lastname && touched.lastname ? (
              <p className="text-red-500">{errors.lastname}</p>
            ) : null} */}
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
              value={mobile}
              onChange={handleInputs}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline form-control"
            />
            {/* {errors.mobile && touched.mobile ? (
              <p className="text-red-500">{errors.mobile}</p>
            ) : null} */}
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
              value={email}
              onChange={handleInputs}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline form-control"
            />
            {/* {errors.email && touched.email ? (
              <p className="text-red-500">{errors.email}</p>
            ) : null} */}
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              autoComplete="off"
              placeholder="enter age"
              value={age}
              onChange={handleInputs}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline form-control"
            />
            {/* {errors.password && touched.password ? (
              <p className="text-red-500">{errors.password}</p>
            ) : null} */}
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={handleInputs}
            />
            <label className="ms-2" htmlFor="confirmation">
              are you sure entered valid details ?
            </label>
            {/* {errors.checkbox && touched.checkbox ? (
              <p className="text-red-500">{errors.checkbox}</p>
            ) : null} */}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
