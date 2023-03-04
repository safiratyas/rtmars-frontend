import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.scss';

function Footer() {
  return (
    <div className="list-footer mt-5">
      <Container className="container-footer mt-5">
        <Row className="row-footer">
          <Col xs={10} style={{ fontWeight: 'bold' }}>
            Copyright &copy; 2023 RTMARS. All Rights Reserved
          </Col>
          <Col xs={2} className="list-app mb-5">
            <BsFacebook style={{ margin: '0 10% 0 10%' }} />
            <BsInstagram style={{ margin: '0 10% 0 10%' }} />
            <BsTwitter style={{ margin: '0 10% 0 10%' }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;