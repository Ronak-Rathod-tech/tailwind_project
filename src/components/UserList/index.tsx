import React, { useEffect, useState } from "react";
// import Data from "../../../db.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://localhost:3000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       setUsers(data.users);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3004/users")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(id: any) {
    const conf = window.confirm("do you want to delete ?");
    if (conf) {
      axios
        .delete("http://localhost:3004/users/" + id)
        .then((res) => {
          alert("record has deleted");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container mt-5 mx:auto px-2 pt-2 shadow-md pb-2">
      <div className="text-right">
        <Link
          to="/adduser"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mb-2 me-2 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add User
        </Link>
      </div>
      <div className="font-bold text-center bg-blue-200 text-white">
        User List
      </div>
      <table className="table-auto  mt-2">
        <thead>
          <tr>
            <th>Id</th>
            <th className="px-14">Name</th>
            <th className="px-14">Address</th>
            <th className="px-14">Mobile</th>
            <th className="px-14">Email</th>
            <th className="px-14">Age</th>
            <th className="px-14">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td className="px-14">{user.name}</td>
                <td className="px-14">{user.address}</td>
                <td className="px-14">{user.mobile}</td>
                <td className="px-14">{user.email}</td>
                <td className="px-14">{user.age}</td>
                <td className="px-14">
                  <Link
                    to={`/edituser/${user.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ms-2 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
