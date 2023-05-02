import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = ()=>{
    googleSignIn()
    .then (result =>{
      const user = result.user;
      console.log(user);
    })
    .catch (error=> console.error(error))  
  }

  const handleGithubSign = ()=>{
    githubSignIn()
    .then (result =>{
      const user = result.user; 
      console.log(user);       
    })
    .catch (error =>{
      console.error(error);
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;    

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Sign in successfully");
        setError("");
        form.reset("");
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <Container className="mx-auto w-50">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="my-3" onClick={() => setShow(!show)}>
          <small>
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </small>
        </p>

        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <hr />
        <div className="d-flex justify-between align-items-center">
        <Button onClick={handleGoogleLogin} className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button className="mx-2" onClick={handleGithubSign} variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>
        </div>
        <Form.Text className="text-secondary">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text>
          <p className="fw-bold text-danger">{error}</p>
          <p className="fw-bold text-success">{success}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
