import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function FormWarga() {
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
              <Form.Label>Jenis Kelamin</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                <option value="Pria">Laki Laki</option>
                <option value="Wanita">Perempuan</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tempat Lahir</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jakarta"
                className="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                placeholder="03/04/1998"
                className="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Alamat</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jl. Manggarai Selatan"
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
              <Form.Label>Agama</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                <option value="Pria">Laki Laki</option>
                <option value="Wanita">Perempuan</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pendidikan</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                <option value="Pria">Laki Laki</option>
                <option value="Wanita">Perempuan</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pekerjaan</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                <option value="Pria">Laki Laki</option>
                <option value="Wanita">Perempuan</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kewarganegaraan</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                <option value="Pria">WNI</option>
                <option value="Wanita">WNA</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload KK</Form.Label>
              <input class="form-control" type="file" id="formFile" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload KTP</Form.Label>
              <input class="form-control" type="file" id="formFile" />
            </Form.Group>


            <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}>
              Input Data
            </Button>
          </Col>
        </Row>
      </Form>
    </Container >
  )
}

export default FormWarga;