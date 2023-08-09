import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (id) {
      console.log("you are in edit mode");

      let currentUserData = JSON.parse(localStorage.getItem("userData"));
      let userToEdit = currentUserData.find((user) => user.id === id);
      if (userToEdit) {
        setUser(userToEdit);
      } else {
        alert(`no user with id ${id} was found`);
      }
    } else {
      console.log("in add user mode");
    }
  }, [id]);

  const handleSave = () => {
    let currentUserData = JSON.parse(localStorage.getItem("userData"));

    if (id) {
      console.log("save in edit mode");
      let i = currentUserData.findIndex((user) => user.id === id);
      currentUserData[i] = user;
    } else {
      console.log("added new user");
      currentUserData.push(user);
    }
    localStorage.setItem("userData", JSON.stringify(currentUserData));

    navigate("/users");
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
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">Last name:</label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <div className="form-group">
        <label className="form-label">password:</label>
        <input
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="form-control"
          placeholder="xx"
        ></input>
      </div>
      <button className="btn btn-primary me-2" onClick={handleSave}>
        {id ? "Save" : "Add"}
      </button>
      <button className="btn btn-danger" onClick={() => navigate("/users")}>
        Cancel
      </button>
    </div>
  );
}

export default EditUser;
