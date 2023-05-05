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
    <Container>
      <Navbar
        className=""
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
      >
        <Container className="bg-info bg-opacity-10">
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavLink
              to="/"
              className="h3 text-decoration-none"
              activeClassName="active"
            >
              <img
                style={{ height: 60 }}
                className=""
                src="https://i.ibb.co/Btp7F7V/chef-food-logo.png"
                alt=""
              />
              <span className="fw-bold">Thai Test</span>
            </NavLink>

            <Nav className="mx-auto fw-bold fs-5 text-black">
              <NavLink
                className=" text-decoration-none"
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="mx-4 text-decoration-none"
                activeClassName="active"
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className="mx-4 text-decoration-none"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </Nav>

            <Nav className=" align-items-center">
              {user && (
                <div className="d-flex">
                  <p className="d-none d-sm-inline-block text-success fw-bold mx-2">
                    {" "}
                    <small>
                      <span>Welcome</span>{" "}
                      {user ? (
                        <OverlayTrigger
                          placement="bottom"
                          overlay={<Tooltip id="tooltip">{user.name}</Tooltip>}
                        >
                          <img
                            src={user.photoURL}
                            alt={user.name}
                            className="rounded-circle"
                            style={{
                              width: "40px",
                              height: "40px",
                              cursor: "pointer",
                            }}
                          />
                        </OverlayTrigger>
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

            {/* <Nav className="d-flex align-items-center">
              {user && (
                <FaUserCircle className="fs-1 text-primary text-decoration-none" />
              )}

              {user && (
                <p className="text-success fw-bold mx-2">
                  {" "}
                  <span>Welcome</span> <br /> {user ? user.email : user.name}
                </p>
              )}
              {user ? (
                <Button
                  onClick={handleLogOut}
                  variant="secondary"
                  className="bg-danger text-white fw-bold"
                >
                  Logout
                </Button>
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
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

    // <Navbar
    //   bg="primary"
    //   variant="light"
    //   className="bg-info bg-opacity-10 fixed top-0 header "
    // >
    //   <Container>
    //     <NavLink to="/" className="h3 text-decoration-none active">
    //       <img
    //         style={{ height: 60 }}
    //         className=""
    //         src="https://i.ibb.co/Btp7F7V/chef-food-logo.png"
    //         alt=""
    //       />
    //       <span className="fw-bold">Thai Test</span>
    //     </NavLink>
    //     <div>
    //       <Nav className="me-auto d-flex gap-5 ">
    //         <NavLink className="text-decoration-none" activeClassName="active" to="/">
    //           Home
    //         </NavLink>
    //         <NavLink className="text-decoration-none" activeClassName="active" to="/blog">
    //           Blog
    //         </NavLink>

    //         <Nav className=" align-items-center">
    //           {user && (
    //             <div className="d-flex">
    //               <p className="d-none d-sm-inline-block text-success fw-bold mx-2">
    //                 {" "}
    //                 <small>
    //                   <span>Welcome</span>{" "}
    //                   {user ? (
    //                     <img
    //                       style={{ height: 40 }}
    //                       src={user.photoURL}
    //                       alt=""
    //                     />
    //                   ) : (
    //                     ""
    //                   )}
    //                 </small>
    //               </p>
    //               <div>
    //                 <img style={{ height: 40 }} src={user?.photo} alt="" />
    //               </div>
    //             </div>
    //           )}
    //           {user ? (
    //             <div className="gap-4">
    //               <Button
    //                 onClick={handleLogOut}
    //                 variant="secondary"
    //                 className="bg-danger text-white fw-bold"
    //               >
    //                 Logout
    //               </Button>
    //             </div>
    //           ) : (
    //             <Link to="/login">
    //               <Button
    //                 variant="secondary"
    //                 className="bg-danger text-white fw-bold"
    //               >
    //                 Login
    //               </Button>
    //             </Link>
    //           )}
    //         </Nav>
    //       </Nav>
    //     </div>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
