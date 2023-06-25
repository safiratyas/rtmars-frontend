import React from "react";
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/actions/logout';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Button } from "react-bootstrap"
import './Navbar.scss';

function NavbarProfile({ userData }) {
  // let user;
  // if (userData == null || userData === {}) {
  //   user = adminData.nama_lengkap
  //   console.log("betul" + user)
  // }

  // if (adminData == null || adminData === {}) {
  //   user = userData.nama_lengkap
  //   console.log("betul 2" + user)
  // }

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
    window.location.href = '/login';
  }
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
              <NavDropdown.Item href="/pendataan/warga" style={{ textDecoration: 'none' }}>
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
          {/* <Nav className="ms-auto" style={{ paddingRight: '10px', paddingBottom: '5px' }}>
            <p>Selamat Datang, {userData.nama_lengkap}</p>
          </Nav> */}
          <Nav className="d-flex">
            <Link to="/login">
              <Button variant="primary" className="nav-signup" onClick={logout}>Log Out</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarProfile;