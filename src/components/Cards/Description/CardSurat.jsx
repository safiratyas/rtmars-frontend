// import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardSurat() {
  return (
    <Container>
      <div className="card-desc mb-5">
        <p>Features</p>
        <h3>Data - Data Surat Permohonan</h3>
      </div>
      <Row xs={1} md={4} className="g-4 text-center">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card className="list-description" style={{ height: "350px" }}>
              <img src={process.env.PUBLIC_URL + '/images/privacy.gif'} className="mx-auto" alt="list" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Data Warga</Card.Title>
                <Card.Text style={{ color: 'grey' }}>Informasi profil warga yang tinggal disekitar wilayah RT 10 Manggarai Selatan</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardSurat;