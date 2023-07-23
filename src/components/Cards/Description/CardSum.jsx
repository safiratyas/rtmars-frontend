/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './CardDesc.scss';

function CardSum({ total }) {
  console.log(total)

  // Filtering Gender (Pria)
  const checkMen = total.filter(data => data.jenis_kelamin === "Pria");
  const totalMen = checkMen.length

  // Filtering Gender (Wanita)
  const checkWomen = total.filter(data => data.jenis_kelamin === "Wanita");
  const totalWomen = checkWomen.length

  // Filtering age > 40 (Orang Tua)
  const checkAge = total.filter(data => data.umur > 40);
  const totalAge = checkAge.length

  return (
    <div className="div-sum">
      <Container>
        <Row xs={1} md={4} className="g-4 text-center">
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/developer.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Orang Tua </h5>
            <p>{totalAge}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/male.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Pria </h5>
            <p>{totalMen}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/female.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Wanita </h5>
            <p>{totalWomen}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + '/images/globe.gif'} className="mx-auto" alt="list" style={{ width: "50%" }} />
            <h5 style={{ fontWeight: "bold" }}>Total </h5>
            <p>{total.length}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardSum;