import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,  
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error.message));
  };

  return (
    <Navbar
      bg="primary"
      variant="light"
      className="bg-info bg-opacity-10 fixed top-0 header "
    >
      <Container>
        <NavLink to="/" className="h3 text-decoration-none active">
          <img
            style={{ height: 60 }}
            className=""
            src="https://i.ibb.co/Btp7F7V/chef-food-logo.png"
            alt=""
          />
          <span className="fw-bold">Thai Test</span>
        </NavLink>
        <div>
          <Nav className="me-auto d-flex gap-5 ">
            <NavLink className="text-decoration-none" activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none" activeClassName="active" to="/blog">
              Blog
            </NavLink>

            <Nav className=" align-items-center">
              {user && (
                <div className="d-flex">
                  <p className="d-none d-sm-inline-block text-success fw-bold mx-2">
                    {" "}
                    <small>
                      <span>Welcome</span>{" "}
                      {user ? (
                        <img
                          style={{ height: 40 }}
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </small>
                  </p>
                  <div>                  
                    <img style={{ height: 40 }} src={user?.photo} alt="" />                  
                  </div>
                </div>
              )}
              {user ? (
                <div className="gap-4">                 
                  <Button
                    onClick={handleLogOut}
                    variant="secondary"
                    className="bg-danger text-white fw-bold"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button
                    variant="secondary"
                    className="bg-danger text-white fw-bold"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
