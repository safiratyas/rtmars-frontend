import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/actions/logout';
import { useDispatch } from 'react-redux';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import './Navbar.scss';

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
          <Nav className="me-auto">
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
              <NavDropdown.Item href="/input/warga" style={{ textDecoration: 'none' }}>
                Input Kegiatan
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav className="d-flex">
              <Link to="/login">
                <Button variant="primary" className="nav-signup">Log Out</Button>
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminSidebar;