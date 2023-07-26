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
          <p>RTMARS adalah website yang dibuat untuk memudahkan Rukun Tetangga (RT) dan Dasawisma dalam proses pengarsipan dan penambahan data serta kegiatan yang terjadi di lingkungan warga. Website ini akan menjadi acuan bagi pengurus saat mem-validasi data dan memudahkan warga saat mengajukan permohonan surat. </p>
          <Link to={"/agenda"}>
            <Button variant="primary" className="list-btn">Mulai</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;