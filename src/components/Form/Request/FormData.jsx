import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function FormWarga({ listReligion, listJob, listEducation }) {
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e)
  };

  useEffect(() => {
    let fileReader = false;
    let isCancel = false;
    console.log(image);
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setUploadedFileURL(result);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  });

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
                {listReligion && listReligion.map((religion) => {
                  return (
                    <option value="Pria">{religion.nama}</option>
                  )
                })}
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pendidikan</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                {listEducation && listEducation.map((education) => {
                  return (
                    <option value="Pria">{education.nama}</option>
                  )
                })}
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pekerjaan</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                {listJob && listJob.map((job) => {
                  return (
                    <option value="Pria">{job.nama}</option>
                  )
                })}
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kewarganegaraan</Form.Label>
              <select className="form-select">
                <option hidden>Pilih Salah Satu</option>
                <option value="WNI">WNI</option>
                <option value="WNA">WNA</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload KK</Form.Label>
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
              />
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