import { Routes, Route } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearcBar from "./components/SearchBar";
import Users from "./components/Users";
import MoonLoader from "react-spinners/MoonLoader";
import UserDetailPage from "./components/Users/UserDetailPage";
const URL = "https://api.github.com/users";

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const cssOverride = {
    display: "block",
    margin: "100px auto",
    borderColor: "red",
  };
  useEffect(() => {
    axios.get(URL).then(({ data }) => setUsers(data));
  }, []);
  const searchUser = (search) => {
    const url = `https://api.github.com/search/users?q=${search}`;
    axios.get(url).then(({ data }) => setUsers(data.items));
  };
  const getUser = (username) => {
    console.log(username)
    
  };
  getUser()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearcBar searchUser={searchUser} />} />
        <Route
          exact
          path={"/user/:login"}
          element={<UserDetailPage />}
        />
        <Route
          path="/"
          element={
            <MoonLoader
              loading={loading}
              cssOverride={cssOverride}
              size={150}
            />
          }
        />
      </Routes>
      {/* <MoonLoader loading={loading} cssOverride={cssOverride} size={150}/> */}
      <Users users={users} />
    </div>
  );
};

export default App;
