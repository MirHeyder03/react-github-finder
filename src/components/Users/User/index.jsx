import React from "react";

const User = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="col-md-4 mb-3">
          <div className="card">
            <img src={user.avatar_url} alt="" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <a
                  href="https://github.com/MirHeyder03"
                  className="btn btn-primary btn-sm"
                >
                  go to the profile
                </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
