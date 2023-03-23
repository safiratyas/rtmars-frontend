import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

function NavbarHomepage() {
  return (
    <>
      <Navbar className="navbar-home sticky-top">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mb-2" alt="list"
              />
            </Navbar.Brand>
          </Link>
          <Nav className="justify-content-center mx-auto nav-center" style={{ paddingRight: "20%" }}>
            <Link to="/pendataan" style={{ textDecoration: 'none' }}><Nav.Link href="#pertanyaan">Pendataan</Nav.Link></Link>
            <Nav.Link href="#header">Agenda</Nav.Link>
            <Nav.Link href="#total">Pengurus</Nav.Link>
            <Nav.Link href="#fitur">Kontak</Nav.Link>
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