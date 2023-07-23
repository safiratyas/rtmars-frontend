import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.scss';

function Footer() {
  let urlFacebook = "https://www.instagram.com/safiraatyas/"
  let urlInstagram = "https://www.instagram.com/safiraatyas/"
  let urlTwitter = "https://twitter.com/rheamoonv"

  return (
    <div className="list-footer mt-5">
      <Container className="container-footer mt-5">
        <Row className="row-footer">
          <Col xs={10} style={{ fontWeight: 'bold' }}>
            Copyright &copy; 2023 RTMARS. All Rights Reserved
          </Col>
          <Col xs={2} className="list-app mb-5">
            <Link to={urlFacebook} style={{ color: 'black' }}>
              <BsFacebook style={{ margin: '0 10% 0 10%' }} />
            </Link>
            <Link to={urlInstagram} style={{ color: 'black' }}>
              <BsInstagram style={{ margin: '0 10% 0 10%' }} />
            </Link>
            <Link to={urlTwitter} style={{ color: 'black' }}>
              <BsTwitter style={{ margin: '0 10% 0 10%' }} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;