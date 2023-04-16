import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form, Alert } from 'react-bootstrap';
import './Register.scss';

function RegisterCard() {
  const navigate = useNavigate();

  const nameField = useRef("");
  const emailField = useRef("");
  const passwordField = useRef("")

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const submitRegister = async (e) => {
    e.preventDefault();

    try {
      const useToRegisterPayload = {
        nama_lengkap: nameField.current.value,
        email: emailField.current.value,
        password: passwordField.current.value
      }

      const registerRequest = await axios.post(
        "http://localhost:3000/api/citizens/register", useToRegisterPayload
      );
      console.log(registerRequest)

      const registerResponse = registerRequest;

      if (registerResponse.status) navigate("/login");

    } catch (err) {
      console.log(err)
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  }

  return (
    <Container className="mt-5">
      <Card className="register mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 register-title">Pendaftaran Warga</Card.Title>
          <Card.Text className="form-register">
            <Form onSubmit={submitRegister}>
              <Form.Group className="mb-3 register-form">
                <Form.Label className="form-label">Nama Panjang</Form.Label>
                <Form.Control
                  placeholder="Jane Doe"
                  className="text"
                  ref={nameField}
                />
              </Form.Group>

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

              <Button type="submit" className="register-btn">
                Check
              </Button>

              <div className="text-center mt-4 mb-3">
                <Form.Group className="mx-auto">
                  <Form.Text style={{ textAlign: 'center' }}>Sudah memiliki akun? </Form.Text>
                  <Link to="/login" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#06A788', fontWeight: 'bold' }}>Masuk Disini</Form.Text></Link>
                </Form.Group>
              </div>
              {errorResponse.isError && (
                <Alert variant="danger">{errorResponse.message}</Alert>
              )}
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default RegisterCard;