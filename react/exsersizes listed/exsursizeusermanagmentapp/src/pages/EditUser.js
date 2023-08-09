import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSave = () => {
    let currentUserData = JSON.parse(localStorage.getItem("userData"));
    currentUserData.push(user);
    localStorage.setItem("userData", JSON.stringify(currentUserData));
  };

  console.log("userpage add or edit is working ");
  return (
    <div className="container">
      <div className="form-group">
        <label className="form-label">ID:</label>
        <input
          type="text"
          value={user.id}
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">First Name:</label>
        <input
          type="text"
          value={user.firstName}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">Last name:</label>
        <input
          type="text"
          value={user.lastName}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="text"
          value={user.email}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">password:</label>
        <input
          type="text"
          value={user.password}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
    </div>
  );
}

export default EditUser;
