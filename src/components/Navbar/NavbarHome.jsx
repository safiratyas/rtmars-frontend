import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.scss';

function NavbarHomepage() {
  const link = "/pendataan/surat/:id"
  const linkProfile = "/input/profile/:id"

  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand href="/home">
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
          <Nav className="d-flex">
            <Link to="/register">
              <Button variant="primary" className="nav-signup me-3">Daftar</Button>
            </Link>
            <Link to="/login">
              <Button variant="primary" className="nav-login me-3">Masuk</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarHomepage;