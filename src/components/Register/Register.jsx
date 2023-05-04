import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Button, Container, Form } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");

    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photoUrl, email, password, confirm);

    if (password !== confirm) {
      setError("Password not match");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Registered successfully");
        setError("");
        form.reset("");
        userUpdate(result.user, name, photoUrl);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const userUpdate = (user, name, photoUrl)=>{
    updateProfile((user), {
      displayName: name, photoURL: photoUrl,
    }).then(() => {    
    }).catch((error) => {      
    });
  };



  const handleTerms = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="mx-auto w-50">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photoUrl" placeholder="Enter your photo Url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">terms and Conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button
          disabled={!accepted}
          className="w-"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text>
          <p className="fw-bold text-danger">{error}</p>
          <p className="fw-bold text-success">{success}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
