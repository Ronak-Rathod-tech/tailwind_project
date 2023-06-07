import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3004/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // let name, value, address, mobile, email, age;

  // const handleInputs = (e: any) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setData({ ...data, [name]: value });
  // };

  function handleSubmit(event: any) {
    event.preventDefault();
    axios.put("http://localhost:3004/users/" + id, data).then((res) => {
      console.log("res", res);
      alert("data updated successfuly !");
      navigate("/");
    });
  }

  return (
    <div className="md:container mx:auto px-96 pt-5">
      <div className="font-bold text-center bg-blue-200 text-white">
        Edit User
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="id"
            >
              Id:
            </label>
            <input
              disabled
              type="number"
              name="id"
              id="id"
              value={data.id}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* {errors.name && touched.name ? (
              <p className="text-red-500">{errors.name}</p>
            ) : null} */}
          </div>

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
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
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
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
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
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
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
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
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
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline form-control"
            />
            {/* {errors.password && touched.password ? (
              <p className="text-red-500">{errors.password}</p>
            ) : null} */}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
