import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import CardToast from "../Cards/Notification/CardToast";
import CardLogout from "../Cards/Notification/Logout";
import './Navbar.scss';

function NavbarProfile({ userData }) {
  const link = `/pendataan/surat/${userData.id}`
  const linkProfile = `/input/profile/${userData.id}`

  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand href="/">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mb-2" alt="list"
              />
            </Navbar.Brand>
          </Link>
          <Nav className="justify-content-center mx-auto nav-center" style={{ paddingRight: "20%" }}>
            <NavDropdown title="Pendataan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/input/surat" style={{ textDecoration: 'none' }}>
                Input Surat Permohonan
              </NavDropdown.Item>
              <NavDropdown.Item href={link} style={{ textDecoration: 'none' }}>
                Daftar Surat Permohonan
              </NavDropdown.Item>
              <NavDropdown.Item href={linkProfile} style={{ textDecoration: 'none' }}>
                Edit Data Diri
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/agenda">Agenda</Nav.Link>
            <Nav.Link href="/pendataan/pengurus">Pengurus</Nav.Link>
          </Nav>
          {/* <Nav className="ms-auto" style={{ paddingRight: '10px', paddingBottom: '5px' }}>
            <p>Selamat Datang, {userData.nama_lengkap}</p>
          </Nav> */}
          <Nav className="d-flex">
            <CardLogout />
            <CardToast />
          </Nav>
        </Container>
      </Navbar >
    </>
  )
}

export default NavbarProfile;