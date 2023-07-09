// import { Link } from 'react-router-dom';
import { React } from "react"
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardWarga({ listCitizen }) {
  return (
    <Container>
      <div className="card-desc mb-5">
        <p>Features</p>
        <h3>Data - Data Warga</h3>
      </div>
      <Row xs={1} md={4} className="g-4 text-center">
        {listCitizen && listCitizen.map((citizen) => {
          return (
            <Col>
              <Card className="list-description" style={{ height: "350px" }}>
                <img src={citizen.foto_warga} className="mx-auto" alt="list" />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>{citizen.nama_lengkap}</Card.Title>
                  <Card.Text style={{ color: 'grey' }}>{citizen.jenis_kelamin}</Card.Text>
                  <Card.Text style={{ color: 'grey' }}>{citizen.umur} Tahun</Card.Text>
                  <Card.Text style={{ color: 'grey' }}>{citizen.alamat}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container >
  )
}

export default CardWarga;