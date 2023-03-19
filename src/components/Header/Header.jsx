import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Header.scss';

function Header() {
  return (
    <Container className="mb-5">
      <Row style={{ paddingTop: "5%" }}>
        <Col xs={6} className="list-img">
          <img src={process.env.PUBLIC_URL + '/images/list.gif'} alt="list" />
        </Col>
        <Col xs={6} className="list-desc">
          <h3>Apa itu RTMARS?</h3>
          <p>RTMARS adalah website yang dibuat untuk memudahkan Rukun Tetangga (RT) dalam mengarsipkan dokumen - dokumen warga. Website ini akan menjadi acuan bagi RT saat mem-validasi data dan memudahkan saat menginput permohonan surat.</p>
          <Link to={"/login"}>
            <Button variant="primary" className="list-btn">Mulai</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;