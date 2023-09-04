import { Link, useNavigate } from "react-router-dom";
import logo from "../Resources/logo.svg";

function Header() {
  // const nav = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Main Krampus Site Loggo"
            width={100}
            height={100}
          />
        </Link>
        <Link className="navbar-brand" to="/CreateCard">
          Create Card
        </Link>
        <Link className="navbar-brand" to="/Register">
          Register
        </Link>
        <Link className="navbar-brand" to="/Login">
          LOGIN
        </Link>
      </div>
    </nav>
  );
}

export default Header;
