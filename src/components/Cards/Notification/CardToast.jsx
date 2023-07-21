import React, { useState } from "react";
import { Button, Card, Container, Row, Col, Toast } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

function CardToast() {
  const [show, setShow] = useState(false);
  const notify = () => toast('Here is your toast.');

  return (
    <>
      <div>
        <Button className="nav-signup" style={{ marginLeft: '10px' }} onClick={notify}>Notification</Button>
        <Toaster position="top-right"
          reverseOrder={false}
        />
      </div>
      {/* <Row>
        <Col xs={6} className="mt-5" style={{ marginTop: "50%" }}>
          <Toast position="top-end" onClose={() => setShow(false)} show={show} delay={3000} autohide style={{ width: '18rem', marginTop: "100px", zIndex: 1, marginLeft: "100px" }}>
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
      </Row > */}
    </>
  );
}

export default CardToast;