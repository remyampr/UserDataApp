import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../style/NavigationBar.css";
import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
  return (
  <div  className="nav-container">
      
<div className="nav-box">
<Navbar bg="dark" expand="lg" className="nav-bar">
      <Navbar.Brand href="#" className="logo">
        UserData
      </Navbar.Brand>
      {/* Navbar Toggle for small screens */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto nav-links">
          <Nav.Link as={NavLink} to="/" end className="link-items">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="about" className="link-items">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="user" className="link-items">
            Users
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</div>

  </div>
  );
};

export default NavigationBar;
