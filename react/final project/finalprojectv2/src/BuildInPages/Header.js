import { Sun, Moon } from "react-bootstrap-icons";
import { useContext } from "react";
import logo from "../ResourcesProject/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { ThemeContext } from "../contexts/ThemeProvider";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <Navbar data-bs-theme={theme} collapseOnSelect expand="sm">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Main Krampus Site Loggo"
            width={70}
            height={70}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/Login">LOGIN</Nav.Link>
            <Nav.Link href="/RegisterCard">Create Card</Nav.Link>
            <Nav.Link href="/UserCards">UserCards</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex" onSubmit={() => {}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link onClick={changeTheme}>
              {theme === "dark" ? (
                <Moon className="ms-1" />
              ) : (
                <Sun className="ms-1" />
              )}
            </Nav.Link>
            <NavDropdown title="Logged in User" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => /*Loggout()*/ console.log("loggedout")}
                href="/"
              >
                Logout
              </NavDropdown.Item>
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
