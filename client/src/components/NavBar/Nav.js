import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className={styles.sticky}>
      <Container>
        <Navbar.Brand href="#home">TKAH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className={styles.navItem}>
              <Link to="/">Home</Link>
            </Nav>
            <Nav className={styles.navItem}>
              <Link to="/public">Public</Link>
            </Nav>
            <Nav className={styles.navItem}>
              <Link to="/auction">Auction</Link>
            </Nav>
            <Nav className={styles.navItem}>
              <Link to="/profile">Profile</Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        <div className={styles.auth}>
          <Nav className={`${styles.navItem} `}>
            <Link to="/login">Login</Link>
          </Nav>
          <Nav className={`${styles.navItem}`}>
            <Link to="/register">Register</Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  ); 
}

export default NavBar;
