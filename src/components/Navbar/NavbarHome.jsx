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
            <Nav.Link href="#header">Tentang</Nav.Link>
            <Nav.Link href="#total">Total</Nav.Link>
            <Nav.Link href="#fitur">Fitur</Nav.Link>
            <Nav.Link href="#pertanyaan">Pertanyaan</Nav.Link>
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