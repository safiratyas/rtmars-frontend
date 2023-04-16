import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Button } from "react-bootstrap"

function NavbarProfile() {
    return (
        <>
          <Navbar key="xs" bg="light" expand="md" className="mb-3 navbar-home sticky-top">
            <Container fluid>
            <Link to="/">
            <Navbar.Brand href="#home">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mb-2" alt="list"
              />
            </Navbar.Brand>
          </Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-md`}
                aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-center mx-auto nav-center" style={{ paddingRight: "20%" }}>
                  <NavDropdown title="Pendataan" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/pendataan" style={{ textDecoration: 'none' }}>
                      Daftar Data Warga
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/input/warga" style={{ textDecoration: 'none' }}>
                      Input Data Warga
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/input/surat" style={{ textDecoration: 'none' }}>
                      Input Surat Permohonan
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/agenda">Agenda</Nav.Link>
                  <Nav.Link href="#total">Pengurus</Nav.Link>
                </Nav>
                <Nav className="d-flex">
                  <Link to="/register">
                    <Button variant="primary" className="nav-signup me-3">Daftar</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="primary" className="nav-login me-3">Masuk</Button>
                  </Link>
                </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
    )
}

export default NavbarProfile;