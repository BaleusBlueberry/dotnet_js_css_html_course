import { Sun, Moon } from "react-bootstrap-icons";
import { useContext } from "react";
import logo from "../ResourcesProject/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "../ResourcesProject/contexts/ThemeProvider";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <Navbar expand="lg" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Main Krampus Site Loggo"
            width={100}
            height={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/Login">LOGIN</Nav.Link>
            <Nav.Link href="/CreateCard">Create Card</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Edit">Edit Mode</Nav.Link>
            <Nav.Link eventKey={2} href="#View">
              View Mode
            </Nav.Link>
            <Nav.Link onClick={changeTheme}>
              {theme === "dark" ? (
                <Moon className="ms-1" />
              ) : (
                <Sun className="ms-1" />
              )}
            </Nav.Link>
            <NavDropdown title="Logged in User" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Favorites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Admin view</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
