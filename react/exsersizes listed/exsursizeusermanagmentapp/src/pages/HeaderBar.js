import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";

function HeaderBar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = isLoggedIn ? localStorage.getItem("userName") : "N/A";
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    nav("/");
  };
  return (
    <nav className="navbar navbar-expand-lg nav-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="My User Manger Site Loggo"
            width={50}
            height={50}
          />
          User Manger
        </Link>
        <div className="navbar-nav">
          {isLoggedIn ? (
            <>
              <Link to="/users" className="btn btn-primary">
                User List
              </Link>
              <span className="navbar-text mx-3">Hello, {userName}</span>
              <button onClick={handleLogout} className="btn btn-info">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
