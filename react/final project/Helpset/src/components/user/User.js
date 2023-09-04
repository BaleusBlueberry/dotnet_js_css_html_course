import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    Role: "",
    ID: `${Math.floor(Math.random() * 1000)}`,
    ProjectID: "31bcacd2-079a-4ec0-b1e3-74aec2cb7423",
    Name: "",
    Email: "",
    Password: "",
    Test: "",
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch all users on component mount
    axios
      .get(
        "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/user/31bcacd2-079a-4ec0-b1e3-74aec2cb7423/"
      )
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update user
      axios
        .put(
          `https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/user/31bcacd2-079a-4ec0-b1e3-74aec2cb7423/`,
          formData
        )
        .then((response) => {
          setUsers((prevUsers) =>
            prevUsers.map((user) => (user.ID === formData.ID ? formData : user))
          );
          setEditMode(false);
          setFormData({
            Role: "",
            ID: `${Math.floor(Math.random() * 1000)}`,
            ProjectID: "31bcacd2-079a-4ec0-b1e3-74aec2cb7423",
            Name: "",
            Email: "",
            Password: "",
            Test: "",
          });
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      // Add new user
      axios
        .post(
          "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/user/",
          formData
        )
        .then((response) => {
          setUsers((prevUsers) => [...prevUsers, formData]);
          setFormData({
            Role: "",
            //generate a random number for the id
            ID: `${Math.floor(Math.random() * 1000)}`,
            ProjectID: "31bcacd2-079a-4ec0-b1e3-74aec2cb7423",
            Name: "",
            Email: "",
            Password: "",
            Test: "",
          });
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/user/31bcacd2-079a-4ec0-b1e3-74aec2cb7423/`
      )
      .then((response) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.ID !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.ID}>
            {user.Name} ({user.Email}) ({user.ID}) ({user.Test})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.ID)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          name="Role"
          value={formData.Role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        <input
          name="Name"
          value={formData.Name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          name="Email"
          value={formData.Email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          name="Password"
          type="password"
          value={formData.Password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <input
          name="Test"
          type="text"
          value="this is a test"
          onChange={handleInputChange}
          placeholder="TEST"
        />
        <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default User;
