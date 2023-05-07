import React from "react";
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/actions/logout';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Button } from "react-bootstrap"

function NavbarProfile({ userData, adminData }) {
  let user;
  if (userData == null || userData === {}) {
    user = adminData.nama_lengkap
    console.log("betul" + user)
  }

  if (adminData == null || adminData === {}) {
    user = userData.nama_lengkap
    console.log("betul 2" + user)
  }

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    window.location.href = '/login';
  }
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
                <Nav.Link href="/pendataan/pengurus">Pengurus</Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <p>Selamat Datang, {user}</p>
                <Link to="/login">
                  <Button variant="primary" className="nav-signup" onClick={logout}>Log Out</Button>
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