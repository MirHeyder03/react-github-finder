import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const [user, setUser] = useState({});
  let { login } = useParams();

  useEffect(() => {
    const url = `https://api.github.com/users/${login}`;
    axios.get(url).then(({ data }) => setUser(data));
  }, [login]);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <img url={user.avatar_url} className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{login}</p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
            </p>
            <p className="btn btn-block btn-dark btn-sm">Github Profile</p>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              {
                <>
                  <h3>About</h3>
                  <p>{user.bio}</p>
                </>
              }
              {
                <>
                  <h3>blog</h3>
                  <p>{user.blog}</p>
                </>
              }
              <div>
                <span className="badge badge-primary m-1">Followers :</span>
                <span className="badge badge-danger m-1">FolloWING :</span>
                <span className="badge badge-success m-1">Repos :</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
