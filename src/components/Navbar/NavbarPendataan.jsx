import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

function NavbarPendataan() {
  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mb-2" alt="list" style={{ width: "21%" }}
              />
            </Navbar.Brand>
          </Link>
          <Nav className="d-flex">
            <p>Selamat Datang, Nama</p>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarPendataan;