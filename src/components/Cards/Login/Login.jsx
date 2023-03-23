import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Form } from 'react-bootstrap';
import "./Login.scss"

function LoginCard() {
  return (
    <Container className="mt-5">
      <Card className="login mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 login-title">Selamat Datang!</Card.Title>
          <Card.Text className="form-login">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nama@gmail.com"
                  className="text"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimum 8 karakter"
                  className="text"
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