import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import "./Login.scss"

function LoginPengurus() {
  const navigate = useNavigate();

  const userField = useRef("");
  const passwordField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: ""
  })

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const userToLoginPayload = {
        user_id: userField.current.value,
        password: passwordField.current.value
      }

      const loginRequest = await axios.post(
        "http://localhost:3000/api/admins/login", userToLoginPayload
      );
      console.log(loginRequest);
      const loginReponse = loginRequest;
      console.log(loginReponse);

      if (loginReponse.status) {
        localStorage.setItem("token", loginReponse.data.token);

        window.location.href = '/';
      }

    } catch (err) {
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  }

  return (
    <Container className="mt-5">
      <Card className="login mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 login-title">Selamat Datang!</Card.Title>
          <Card.Text className="form-login">
            <Form onSubmit={submitLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">User ID</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="31xxxxxxx"
                  className="text"
                  ref={userField}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimum 8 karakter"
                  className="text"
                  ref={passwordField}
                />
              </Form.Group>

              {errorResponse.isError && (
                <Alert variant="danger">{errorResponse.message}</Alert>
              )}
              <Button variant="primary" type="submit" className="login-btn" style={{ marginBottom: "5%" }}>
                Check
              </Button>

            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default LoginPengurus;