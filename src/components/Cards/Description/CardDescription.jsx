// import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardDescription() {
  return (
    <Container style={{ paddingTop: "5%" }}>
      <div className="card-desc mb-5">
        <p>Features</p>
        <h3>Fitur - Fitur Yang Tersedia</h3>
      </div>
      <Row xs={1} md={4} className="g-4 text-center">
        <Col>
          <Card className="list-description" style={{ height: "350px" }}>
            <img src={process.env.PUBLIC_URL + '/images/privacy.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>Data Warga</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Informasi profil warga yang tinggal disekitar wilayah RT 10 Manggarai Selatan</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="list-description" style={{ height: "350px" }}>
            <img src={process.env.PUBLIC_URL + '/images/time.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>Agenda</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Memuat jadwal berbagai macam kegiatan warga yang dilakukan.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="list-description" style={{ height: "350px" }}>
            <img src={process.env.PUBLIC_URL + '/images/document.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>Permohonan Surat</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Kemudahan dalam menyimpan surat menyurat sesuai dengan permohonan warga.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="list-description" style={{ height: "350px" }}>
            <img src={process.env.PUBLIC_URL + '/images/consultation.gif'} className="mx-auto" alt="list" />
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>Laporan Tamu</Card.Title>
              <Card.Text style={{ color: 'grey' }}>Laporan keamanan dan ketertiban untuk tamu wajib lapor 1 x 24 jam kepada RT.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CardDescription;