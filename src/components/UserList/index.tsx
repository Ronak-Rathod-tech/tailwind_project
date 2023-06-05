import React, { useEffect, useState } from "react";
// import Data from "../../data.json";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data.users);
      });
  }, []);
  return (
    <div className="md:container mx:auto px-2 pt-2 shadow-md text-center">
      <div className="font-bold text-center bg-blue-200 text-white">
        User List
      </div>
      <table className="table-auto mt-2">
        <thead>
          <tr className="">
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
            </tr>
          ))}
          <div>
            {/* {Data &&
              Data.map((data) => {
                console.log(data);
                return (
                  <div className="" key={data.id}>
                    {data.id}
                    {data.name}
                  </div>
                );
              })} */}
          </div>
          <tr>
            <td></td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
