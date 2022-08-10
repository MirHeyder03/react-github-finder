import { Routes,Route } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearcBar from "./components/SearchBar";
import Users from "./components/Users";
import { CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import UserDetailPage from "./components/Users/UserDetailPage";

function App() {
  const [user,setUser]=([]);
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false);
  const cssOverride = {
    display: "block",
    margin: "100px auto",
    borderColor: "red",
    
  };
  useEffect(() => {
    setTimeout(() => {
      const url = "https://api.github.com/users";
      axios.get(url).then(({ data }) => setUsers(data));
    }, []);
  }, 3000);
  const searchUser = (search) => {
    const url = `https://api.github.com/search/users?q=${search}`;
    axios.get(url).then(({ data }) => setUsers(data.items));
  };
  const getUser=(username)=>{
    const url = `https://api.github.com/users/${username}`;
    axios.get(url).then(({ data }) => setUser(data));
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearcBar searchUser={searchUser} />}/>
        <Route path="/user/:login" element={<UserDetailPage getUser={getUser} user={user} setUser={setUser}/>}/>
        </Routes>
      {
        loading ? <MoonLoader loading={loading} cssOverride={cssOverride} size={150} /> : <Users users={users} />
      }
    </div>
  );
}

export default App;
