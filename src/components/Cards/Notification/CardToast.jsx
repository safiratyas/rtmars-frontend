import React, { useState } from "react";
import { Button, Card, Container, Row, Col, Toast } from 'react-bootstrap';

function CardToast() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row>
        <Col xs={6} className="mt-5" style={{ marginTop: "50%" }}>
          <Toast position="top-end" onClose={() => setShow(false)} show={show} delay={3000} autohide style={{ width: '18rem', marginTop: "100px" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)} className="nav-signup">Notifikasi</Button>
        </Col>
      </Row >
    </>
  );
}

export default CardToast;