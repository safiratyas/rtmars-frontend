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
            <Button className="interest-btn" style={{ marginLeft: '50px', paddingTop: '2.5%' }}>
              <ReactWhatsapp number="+6283877647148" message="Assalammualaikum, perkenalkan nama saya... dan saya ingin bertanya" style={{ backgroundColor: '#002B5B', borderColor: '#002B5B', color: 'white' }}>
                Chat Whatsapp
              </ReactWhatsapp>
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