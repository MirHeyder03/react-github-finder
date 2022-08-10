import React from "react";
import {Link} from "react-router-dom";
const User = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="col-md-4 mb-3">
          <div className="card">
            <img src={user.avatar_url} alt="" className="img-fluid" />
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-align-center">
                <h5 className="card-title text-align-center">{user.login}</h5>
                <Link
                  to={`/user/${user.login}`}
                  className="btn btn-dark btn"
                >
                 Profile
                </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
