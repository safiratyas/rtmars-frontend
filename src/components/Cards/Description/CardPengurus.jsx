// import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import {
  FaWhatsapp,
} from 'react-icons/fa';
import './CardDesc.scss';

function CardPengurus({ listAdmin }) {
  return (
    <Container>
      <div className="card-desc mb-5">
        <p>Features</p>
        <h3>Data - Data Pengurus</h3>
      </div>
      <Row xs={1} md={4} className="g-4 text-center">
        {listAdmin && listAdmin.map((admin) => {
          return (
            <Col>
              <Card className="list-description" style={{ height: "350px" }}>
                <img src={admin.foto_pengurus} className="mx-auto" alt="list" />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>{admin.nama_lengkap}</Card.Title>
                  <Card.Text style={{ color: 'grey' }}>{admin.jenis_kelamin}</Card.Text>
                  <Card.Text style={{ color: 'grey' }}>{admin.umur} Tahun</Card.Text>
                  <Card.Text style={{ color: 'grey' }}>{admin.tipe_pengurus}</Card.Text>
                </Card.Body>
                <Button variant="secondary" className="button-wa" style={{ fontSize: '15px' }}>
                  {' '}
                  <ReactWhatsapp number="+6283877647148" message="Assalammualaikum, perkenalkan nama saya... dan saya ingin bertanya" style={{ backgroundColor: '#002B5B', borderColor: '#002B5B', color: 'white' }}>
                    Open Whatsapp
                  </ReactWhatsapp>
                  <FaWhatsapp />
                </Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container >
  )
}

export default CardPengurus;