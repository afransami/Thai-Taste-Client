import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  NavLink,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
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
    <Navbar className="bg-info bg-opacity-10 fixed top-0">
      <Container>
        <Link to="/" className="h3 text-decoration-none">
          Thai Test
        </Link>
        <div>
          <Nav className="me-auto d-flex gap-5 ">
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
            <Link className="text-decoration-none" to="/blog">
              Blog
            </Link>

            <Nav className=" align-items-center">
              {user && (
                <div>
                <img src={user?.photo} alt="" /> 
                <FaUserCircle className="fs-1 text-primary text-decoration-none" />
                </div>
              )}

              {user && (
                <p className="d-none d-sm-inline-block text-success fw-bold mx-2">
                  {" "}
                  <span>Welcome</span> <br /> {user ? user.email : user.name}
                </p>
              )}
              {user ? (
                // <Button
                //   onClick={handleLogOut}
                //   variant="secondary"
                //   className="bg-danger text-white fw-bold"
                // >
                //   Logout

                //   </Button>


              [""].map((placement) => (
                  <OverlayTrigger 
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        <strong>{placement} </strong>.
                      </Tooltip>
                    }
                  >
                    <Button variant="secondary" onClick={handleLogOut}                    
                    className="bg-danger text-white fw-bold">
                      Log out <br /> {placement}
                    </Button>
                  </OverlayTrigger>
                ))

                
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
