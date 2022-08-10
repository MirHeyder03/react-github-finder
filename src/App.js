import { Routes,Route } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearcBar from "./components/SearchBar";
import Users from "./components/Users";
import { CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";

function App() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(true);
  const cssOverride = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  useEffect(() => {
    setTimeout(() => {
      const url = "https://api.github.com/users";
      axios.get(url).then(({ data }) => setUsers(data));
      // setLoading(false);
    }, []);
  }, 3000);
  const searchUser = (search) => {
    const url = `https://api.github.com/search/users?q=${search}`;
    axios.get(url).then(({ data }) => setUsers(data.items));
  };
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Navbar />}/>
        <Route path="/" element={<SearcBar searchUser={searchUser} />}/>
      
        <>
      {
        loading ? <MoonLoader loading={loading} cssOverride={cssOverride} size={150} /> : <Users users={users} /> 
      }
      </>
</Routes>
    </div>
  );
}

export default App;
