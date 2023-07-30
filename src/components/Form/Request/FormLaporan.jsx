import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from "react-router-dom";
import { createReport } from '../../../redux/actions/createReport';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function LaporanBulanan({ userData }) {
  const dispatch = useDispatch();
  const params = useParams();

  // Declare Field
  const [loading, setLoading] = useState(false);
  const jumlahRumahField = useRef("");
  const jumlahKeluargaField = useRef("");
  const jumlahWargaField = useRef("");
  const jumlahBayiField = useRef("");
  const jumlahMeninggalField = useRef("");
  const jumlahPindahanField = useRef("");
  const kegiatanPancasilaField = useRef("");
  const kegiatanGotongRoyongField = useRef("");
  const kegiatanPanganField = useRef("");
  const kegiatanSandangField = useRef("");
  const kegiatanTataField = useRef("");
  const kegiatanTerampilField = useRef("");
  const kegiatanKesehatanField = useRef("");
  const kegiatanKoperasiField = useRef("");
  const kegiatanKelestarianField = useRef("");
  const kegiatanPerencanaanField = useRef("");
  const jumlahWargaPindahField = useRef("");
  const bulanField = useRef("");
  const tahunField = useRef("");
  const pengurusField = useRef("");

  const {
    createReportLoading,
    createReportResult,
    createReportError,
  } = useSelector((state) => { return state.createReportReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      jumlah_rumah: jumlahRumahField.current.value,
      jumlah_keluarga: jumlahKeluargaField.current.value,
      jumlah_warga: jumlahWargaField.current.value,
      jumlah_bayi: jumlahBayiField.current.value,
      jumlah_meninggal: jumlahMeninggalField.current.value,
      jumlah_warga_pindah: jumlahWargaPindahField.current.value,
      jumlah_pindahan: jumlahPindahanField.current.value,
      kegiatan_pancasila: kegiatanPancasilaField.current.value,
      kegiatan_gotong_royong: kegiatanGotongRoyongField.current.value,
      kegiatan_pangan: kegiatanPanganField.current.value,
      kegiatan_sandang: kegiatanSandangField.current.value,
      kegiatan_tata_laksana: kegiatanTataField.current.value,
      kegiatan_pendidikan_terampil: kegiatanTerampilField.current.value,
      kegiatan_kesehatan: kegiatanKesehatanField.current.value,
      kegiatan_pengembangan_koperasi: kegiatanKoperasiField.current.value,
      kegiatan_kelestarian: kegiatanKelestarianField.current.value,
      kegiatan_perencanaan_sehat: kegiatanPerencanaanField.current.value,
    };
    await dispatch(createReport(body));
  }

  useEffect(() => {
    console.log(createReportResult);
    if (createReportLoading) {
      setLoading(true);
    } else if (createReportResult) {
      setLoading(false);
      window.location.reload();
      console.log(createReportResult);
    } else if (createReportError) {
      console.log(createReportError);
    }
  });

  if (createReportResult) {
    return <Navigate to="/dashboard/admin" />;
  }

  return (
    <Container className="mt-5">
      <div className="card-desc mb-5">
        <p>Laporan Bulanan</p>
        <h3>Ketua Kelompok Dasawisma</h3>
      </div>

      <Form onSubmit={handleSubmit}>
        <Card>
          <Row>
            <Col xs={6}>
              <img src={userData.foto_pengurus} className="mb-2" alt="header" style={{ width: "50%" }}
              />
            </Col>
            <Col xs={6}>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>Nama</Card.Title>
                <Card.Text style={{ color: 'grey' }}>{userData.nama_lengkap}</Card.Text>
                <Card.Title style={{ fontWeight: "bold" }}>NIK</Card.Title>
                <Card.Text style={{ color: 'grey' }}>{userData.no_ktp}</Card.Text>
                <Card.Title style={{ fontWeight: "bold" }}>Nama Kelompok Dasawisma</Card.Title>
                <Card.Text style={{ color: 'grey' }}>{userData.nama_kelompok_dasawisma}</Card.Text>
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
                  ref={jumlahRumahField}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Keluarga Yang Didata</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                  ref={jumlahKeluargaField}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Yang Didata</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                  ref={jumlahWargaField}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Bayi Yang Lahir</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                  ref={jumlahBayiField}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Meninggal</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                  ref={jumlahMeninggalField}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Pindah</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                  ref={jumlahWargaPindahField}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Jumlah Warga Pindahan</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="10"
                  className="text"
                  ref={jumlahPindahanField}
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
                <select className="form-select" ref={kegiatanPancasilaField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Gotong Royong</Form.Label>
                <select className="form-select" ref={kegiatanGotongRoyongField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Pangan</Form.Label>
                <select className="form-select" ref={kegiatanPanganField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Sandang</Form.Label>
                <select className="form-select" ref={kegiatanSandangField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Perumahan dan Tata Laksana Rumah Tangga</Form.Label>
                <select className="form-select" ref={kegiatanTataField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Pendidikan dan Keterampilan</Form.Label>
                <select className="form-select" ref={kegiatanTerampilField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Kesehatan</Form.Label>
                <select className="form-select" ref={kegiatanKesehatanField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Pengembangan Kehidupan Koperasi</Form.Label>
                <select className="form-select" ref={kegiatanKoperasiField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Kelestarian Lingkungan Hidup</Form.Label>
                <select className="form-select" ref={kegiatanKelestarianField}>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Kegiatan Perencanaan Sehat</Form.Label>
                <select className="form-select" ref={kegiatanPerencanaanField}>
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
        {loading && (
          <span className="spinner-border spinner-border-sm me-2" />
        )}
      </Form>
    </Container >
  )
}

export default LaporanBulanan;