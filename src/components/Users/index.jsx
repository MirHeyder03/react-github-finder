import User from "./User/index";
const Users = ({users}) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <User users={users} />
      </div>
    </div>
  );
};

export default Users;
