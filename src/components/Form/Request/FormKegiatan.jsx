import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function FormKegiatan() {
  // const navigate = useNavigate();
  // const params = useParams();

  // const dateField = useRef("");
  // const documentField = useRef("");
  // const descriptionField = useRef("")
  // const [modalShow, setModalShow] = useState(false);

  // const [errorResponse, setErrorResponse] = useState({
  //   isError: false,
  //   message: "",
  // });

  // const createDocument = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const createListPayload = {
  //       tanggal_pengajuan: dateField.current.value,
  //       jenis_dokumen: documentField.current.value,
  //       keterangan: descriptionField.current.value,
  //       id_warga: userData.id
  //     }

  //     const token = localStorage.getItem('token');
  //     const listRequest = await axios.post(
  //       "http://localhost:3000/api/citizens/documents/create", createListPayload, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //     );
  //     console.log(listRequest);
  //     const listResponse = listRequest;
  //     console.log(listResponse);

  //     if (listResponse.status) {
  //       localStorage.setItem("token", listResponse.data.token);

  //       navigate(`/pendataan/surat/${userData.id}`)
  //     }

  //   } catch (err) {
  //     const response = err.response.data;

  //     setErrorResponse({
  //       isError: true,
  //       message: response.message,
  //     });
  //   }
  // }

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
                // defaultValue={userData.nama_lengkap}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                // defaultValue={userData.no_kk}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No NIK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                // defaultValue={userData.no_nik}
                disabled
              />
            </Form.Group>

          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Jenis Kegiatan</Form.Label>
              <Form.Control
                type="name"
                placeholder="Kegiatan Penyuluhan Lansia"
                className="text"
              // ref={documentField}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Keterangan</Form.Label>
              <textarea
                class="form-control"
                placeholder="Kegiatan ini diperuntukkan untuk lansia karena..."
              // ref={descriptionField}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  // onChange={handleChangeImage}
                  className="avatar-image"
                />
              </div>
            </Form.Group>
          </Col>
          <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}
          >
            Input Data
          </Button>
          {/* {errorResponse.isError && (
            <Alert variant="danger">{errorResponse.message}</Alert>
          )} */}
        </Row>
      </Form>
    </Container >
  )
}

export default FormKegiatan;