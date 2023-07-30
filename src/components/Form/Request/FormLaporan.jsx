import React, { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { updateListProfile } from '../../../redux/actions/updateCitizen';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function LaporanBulanan() {
  return (
    <Container className="mt-5">
      <div className="card-desc mb-5">
        <p>Laporan Bulanan</p>
        <h3>Ketua Kelompok Dasawisma</h3>
      </div>
      <Form>
        <Card>
          <Row>
            <Col xs={6}>
              <img src={process.env.PUBLIC_URL + '/images/edit.gif'} className="mb-2" alt="header" style={{ width: "50%" }}
              />
            </Col>
            <Col xs={6}>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Nama</Card.Title>
                <Card.Text style={{ color: 'grey' }}>Memuat jadwal berbagai macam kegiatan warga yang dilakukan.</Card.Text>
                <Card.Title style={{ fontWeight: "bold" }}>NIK</Card.Title>
                <Card.Text style={{ color: 'grey' }}>Memuat jadwal berbagai macam kegiatan warga yang dilakukan.</Card.Text>
                <Card.Title style={{ fontWeight: "bold" }}>Nama Kelompok Dasawisma</Card.Title>
                <Card.Text style={{ color: 'grey' }}>Memuat jadwal berbagai macam kegiatan warga yang dilakukan.</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className="mt-5">
          <Row>
            <Col xs={6}>
              <div className="laporan mt-5 mb-5 px-5">
                <h3>Pendataan</h3>
                <p>Berisikan pendataan warga termasuk dengan bangunan yang ditinggali</p>
              </div>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3 mt-5">
                <Form.Label className="form-label">Jumlah Rumah Yang Didata</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Keluarga Yang Didata</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Yang Didata</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Bayi Yang Lahir</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Meninggal</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Pindah</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Pindahan</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                />
              </Form.Group>
            </Col>
            <h5>-----------------------------------------------------------------------------------------------------</h5>
            <Col xs={6}>
              <div className="laporan mb-5 px-5">
                <h3>Penggerakkan</h3>
                <p>Menggerakkan partisipasi warga dalam pelaksanaan kegiatan 10 Program Pokok PKK</p>
              </div>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Penghayatan dan Pengamatan Pancasila</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Gotong Royong</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Pangan</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Sandang</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Perumahan dan Tata Laksana Rumah Tangga</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Pendidikan dan Keterampilan</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Kesehatan</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Pengembangan Kehidupan Koperasi</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Kelestarian Lingkungan Hidup</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Perencanaan Sehat</Form.Label>
                <select className="form-select">
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
            </Col>
          </Row>
        </Card>
        <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}>
          Input Data
        </Button>
      </Form>
    </Container >
  )
}

export default LaporanBulanan;