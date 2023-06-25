import React from "react";
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/actions/logout';
import { useDispatch } from 'react-redux';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Navbar.scss';

function NavbarPendataan({ userData }) {
  console.log("check data" + userData)
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
            <Navbar.Brand href="/home">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mb-2" alt="list" style={{ width: "25%" }}
              />
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto" style={{ paddingRight: '10px', paddingBottom: '5px' }}>
            <p>Selamat Datang, {userData.nama_lengkap}</p>
          </Nav>
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

export default NavbarPendataan;