import { Fragment, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Context";
import styles from "./Nav.module.css";

function NavBar() {
  const { user, setUser } = useContext(UserContext);

  const logoutHandler = (e) => {
    setUser({
      role: "guest",
      user: {},
      loggedIn: false,
    });
  };

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
            {user.loggedIn && (
              <Fragment>
                <Nav className={styles.navItem}>
                  <Link to="/auction">Auction</Link>
                </Nav>
                <Nav className={styles.navItem}>
                  <Link to="/profile">Profile</Link>
                </Nav>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
        {user.role === "admin" && (
          <h5 className={styles.admin}>
            Yo!! You're an admin, Now you have some special access
          </h5>
        )}
        <div className={styles.auth}>
          {!user.loggedIn && (
            <div className="d-flex">
              <Nav className={`${styles.navItem} `}>
                <Link to="/login">Login</Link>
              </Nav>
              <Nav className={`${styles.navItem}`}>
                <Link to="/register">Register</Link>
              </Nav>
            </div>
          )}
          {user.loggedIn && (
            <Nav className={`${styles.navItem} `} onClick={logoutHandler}>
              <Link to="/">LogOut</Link>
            </Nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
