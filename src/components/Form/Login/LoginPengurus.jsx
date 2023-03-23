import React from "react";
import { Button, Card, Container, Form } from 'react-bootstrap';
import "./Login.scss"

function LoginPengurus() {
  return (
    <Container className="mt-5">
      <Card className="login mx-auto">
        <Card.Body>
          <Card.Title className="mb-5 login-title">Selamat Datang!</Card.Title>
          <Card.Text className="form-login">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">User ID</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="31xxxxxxx"
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