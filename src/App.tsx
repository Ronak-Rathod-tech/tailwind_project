import React from "react";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<UserList />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
