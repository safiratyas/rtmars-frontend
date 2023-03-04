// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardSum() {
  return (
    <div className="div-sum mt-5 mb-5" id="total">
      <Container>
        <Row xs={1} md={4} className="g-4 text-center">
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/developer.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Kepala Keluarga </h5>
            <p>100000</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/male.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Pria </h5>
            <p>100000</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/female.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Wanita </h5>
            <p>100000</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/globe.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Total </h5>
            <p>100000</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardSum;