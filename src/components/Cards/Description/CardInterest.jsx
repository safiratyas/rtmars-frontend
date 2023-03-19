import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardInterest() {
  return (
    <Container className="mt-5">
      <Card className="interest-description">
        <Row>
          <Col xs={6}>
            <Button className="interest-btn" href="/login" style={{ marginLeft: '50px', paddingTop: '2.5%' }}>Chat Whatsapp</Button>
          </Col>
          <Col xs={6}>
            <Card.Body>
              <Card.Title className="interest-title">Hubungi Pengurus Untuk Mendapatkan Informasi Terlengkap!</Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default CardInterest;