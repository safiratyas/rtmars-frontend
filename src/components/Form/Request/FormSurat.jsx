import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function FormSurat() {
  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Nama Lengkap</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jane Doe"
                className="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No NIK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
              />
            </Form.Group>

          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Jenis Dokumen</Form.Label>
              <Form.Control
                type="name"
                placeholder="Surat SKTM"
                className="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tanggal Pengajuan</Form.Label>
              <Form.Control
                type="date"
                className="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Keterangan</Form.Label>
              <textarea class="form-control" placeholder="Untuk Pengajuan Beasiswa"></textarea>
            </Form.Group>
          </Col>
          <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}>
            Input Data
          </Button>
        </Row>
      </Form>
    </Container >
  )
}

export default FormSurat;