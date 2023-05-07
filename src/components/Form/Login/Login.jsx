import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import "./Login.scss"

function LoginCard() {
  const navigate = useNavigate();

  const emailField = useRef("");
  const passwordField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: ""
  })

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const userToLoginPayload = {
        email: emailField.current.value,
        password: passwordField.current.value
      }

      const loginRequest = await axios.post(
        "http://localhost:3000/api/citizens/login", userToLoginPayload
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
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nama@gmail.com"
                  className="text"
                  ref={emailField}
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

              {/* <Form.Group className="mb-3">
                <Form.Label className="form-label">Kata Kunci</Form.Label>
                <Form.Control
                  type="keywords"
                  placeholder="Kata Kunci Saat Mendaftar"
                  className="text"
                />
              </Form.Group> */}
              {errorResponse.isError && (
                <Alert variant="danger">{errorResponse.message}</Alert>
              )}
              <Button variant="primary" type="submit" className="login-btn">
                Check
              </Button>
              <Link to="/login-pengurus" style={{ textDecoration: 'none' }}>
                <Button variant="primary" type="submit" className="login-pengurus">
                  RT & Dasawisma
                </Button>
              </Link>

              <div className="text-center mt-4 mb-3">
                <Form.Group className="mx-auto">
                  <Form.Text style={{ textAlign: 'center' }}>Tidak memiliki akun? </Form.Text>
                  <Link to="/register" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#06A788', fontWeight: 'bold' }}>Daftar Disini</Form.Text></Link>
                </Form.Group>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default LoginCard;