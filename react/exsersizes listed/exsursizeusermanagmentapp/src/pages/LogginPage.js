import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    let users = JSON.parse(localStorage.getItem("userData"));

    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log("user found, good login");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", `${user.firstName} ${user.lastName}`);

      navigate("/users");
    } else {
      console.log("user not found");
      alert("the username of password are wrong");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");

      alert("the Email of password are wrong");
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label className="form-label" htmlFor="inputEmail">
          User Email:
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default LogginPage;
