import React from "react";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.scss';
import CardToast from "../Cards/Notification/CardToast";
import CardLogout from "../Cards/Notification/Logout";

function AdminSidebar({ userData }) {
  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Link to="/dashboard/admin">
            <Navbar.Brand href="/home">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mb-2" alt="list"
              />
            </Navbar.Brand>
          </Link>
          <Nav cclassName="justify-content-center mx-auto nav-center" style={{ paddingRight: "20%" }}>
            <NavDropdown title="Pendataan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pendataan/warga" style={{ textDecoration: 'none' }}>
                Daftar Data Warga
              </NavDropdown.Item>
              <NavDropdown.Item href="/pendataan/surat" style={{ textDecoration: 'none' }}>
                Daftar Surat Permohonan
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Edit Data" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/input/warga" style={{ textDecoration: 'none' }}>
                Input Data Warga
              </NavDropdown.Item>
              <NavDropdown.Item href="/input/kegiatan" style={{ textDecoration: 'none' }}>
                Input Kegiatan
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <CardLogout />
            <CardToast />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminSidebar;