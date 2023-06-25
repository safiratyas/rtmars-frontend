import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import ReactWhatsapp from 'react-whatsapp';
import {
  FaWhatsapp,
} from 'react-icons/fa';
import './CardDesc.scss';

function CardInterest() {
  return (
    <Container style={{ paddingTop: "5%" }}>
      <Card className="interest-description">
        <Row>
          <Col xs={6}>
            <Button className="interest-btn" href="/pendataan/pengurus" style={{ marginLeft: '50px', paddingTop: '3.5%' }}>
              Hubungi Melalui Whatsapp
              <FaWhatsapp />
            </Button>
          </Col>
          <Col xs={6}>
            <Card.Body>
              <Card.Title className="interest-title">
                Hubungi Pengurus Untuk Mendapatkan Informasi Terlengkap!
              </Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default CardInterest;