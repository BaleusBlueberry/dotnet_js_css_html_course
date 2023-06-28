import { Link } from "react-router-dom";

function Links() {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home page </Link>|<Link to="/AboutUs">Contact Us </Link>|
      <Link to="/ContactUs">Contact Us</Link>
    </nav>
  );
}

export { Links };
