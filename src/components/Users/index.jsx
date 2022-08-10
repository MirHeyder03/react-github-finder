import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User/index";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://api.github.com/users";
    axios.get(url).then(({ data }) => setUsers(data));
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <User users={users} />
      </div>
    </div>
  );
};

export default Users;
