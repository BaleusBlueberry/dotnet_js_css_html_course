import { useEffect, useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    setUsers(userData);
  }, []);

  console.log("are you working , yes");
  return (
    <div className="container">
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
