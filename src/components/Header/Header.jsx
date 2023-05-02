import React from 'react';
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FaBeer, FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <Navbar  className='bg-info bg-opacity-10 fixed top-0'>
        <Container>
            <Link to='/' className='h3 text-decoration-none'>Thai Test</Link>          
          <div>
          <Nav className="me-auto d-flex gap-5 ">
            <Link className='text-decoration-none' to= '/' >Home</Link>
            <Link className='text-decoration-none' to= '/blog' >Blog</Link>
            <button className='btn btn-warning'>Login</button>
            

           
            
            {/* <Nav className="d-flex align-items-center">
              {user && (
                <FaUserCircle className="fs-1 text-primary text-decoration-none" />
              )}

              {user && <p className="text-success fw-bold mx-2"> <span>Welcome</span> <br /> {user ? user.email : user.name}</p>}
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
           
          </Nav>
          </div>
        </Container>
      </Navbar>
    );
};

export default Header;