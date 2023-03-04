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
              {/* <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="mx-auto" alt="list"
              /> */}
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">
              <Button variant="primary">Primary</Button>
            </Nav.Link> */}
            <Link to="/register">
              <Button variant="primary" className="nav-signup me-3">Sign Up</Button>
            </Link>
            <Link to="/login">
              <Button variant="primary" className="nav-login me-3">Log In</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarHomepage;