import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    setUsers(userData);
  }, []);

  const handleDelete = (i) => {
    if (!window.confirm(`Are you sure you want to delete`)) {
      return;
    }

    const updateData = [...users];
    updateData.splice(i, 1);
    setUsers(updateData);

    localStorage.setItem("userData", JSON.stringify(updateData));
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-user")}
      >
        Add User
      </button>
      <ul className="list-group">
        {users.map((user, i) => (
          <li key={user.id} className="list-group-item">
            {user.firstName} {user.lastName} - {user.email}
            <button
              className="btn btn-info"
              onClick={() => navigate(`/edit-user/${user.id}`)}
            >
              Edit
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleDelete(i)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
