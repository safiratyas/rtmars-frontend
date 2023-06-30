/* eslint-disable no-lone-blocks */
// import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardSurat({ documentData, userData }) {

  return (
    <Container>
      <div className="card-desc mb-5">
        <p>Features</p>
        <h3>Data - Data Surat Permohonan {userData.nama_lengkap}</h3>
      </div>
      <Row xs={1} md={4} className="g-4 text-center">
        {documentData && documentData.map((document) => {
          {
            if (userData.id === document.id_warga) {
              return (
                <Col>
                  <Card className="list-description" style={{ height: "250px" }}>
                    <img src={userData.foto_warga} className="mx-auto" alt="list" />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>{userData.nama_lengkap}</Card.Title>
                      <Card.Text style={{ color: 'grey' }}>{document.jenis_dokumen}</Card.Text>
                      <Card.Text style={{ color: 'grey' }}>{document.tanggal_pengajuan}</Card.Text>
                      <Card.Text style={{ color: 'grey' }}>{document.keterangan}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }
          }
        })}
      </Row>
    </Container>
  )
}

export default CardSurat;