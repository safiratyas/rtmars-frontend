import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"
import { useParams } from "react-router-dom";

function InputWarga({ listReligion, listJob, listEducation, userData }) {
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  const dispatch = useDispatch();
  let params = useParams()

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e)
  };

  // Declare Field
  const nameField = useRef("");
  const genderField = useRef("");
  const birthPlaceField = useRef("");
  const dateOfBirthField = useRef("");
  const addressField = useRef("");
  const noKKField = useRef("");
  const noNIKField = useRef("");
  const religionField = useRef("");
  const eduField = useRef("");
  const jobField = useRef("");
  const citizenshipField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: ""
  })

  const submitCitizen = async (e) => {
    e.preventDefault();

    try {
      const userToUpdatePayload = {
        nama_lengkap: nameField.current.value,
        alamat: addressField.current.value,
        jenis_kelamin: genderField.current.value,
        tempat_lahir: birthPlaceField.current.value,
        tanggal_lahir: birthPlaceField.current.value,
        id_agama: religionField.current.value.id,
        id_pendidikan: eduField.current.value,
        id_pekerjaan: jobField.current.value,
        kewarganegaraan: citizenshipField.current.value,
        no_nik: noNIKField.current.value,
        no_kk: noKKField.current.value,
        // foto_warga,
        // foto_kk,
        // foto_ktp,
      }

      // console.log(userToUpdatePayload + " Lewat Sini")

      const updateRequest = await axios.post(
        "http://localhost:3000/api/citizens/create/data", userToUpdatePayload
      );

      const loginReponse = updateRequest;
      console.log(loginReponse);

      if (loginReponse.status) {
        localStorage.setItem("token", loginReponse.data.token);

        window.location.href = '/';
      }

    } catch (err) {
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  }

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
      <Form onSubmit={submitCitizen}>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Nama Lengkap</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jane Doe"
                className="text"
                ref={nameField}
                defaultValue={userData.nama_lengkap}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <select
                className="form-select"
                ref={genderField}
                defaultValue={userData.jenis_kelamin}
              >
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
                ref={birthPlaceField}
                defaultValue={userData.tempat_lahir}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                placeholder="03/04/1998"
                className="text"
                ref={dateOfBirthField}
                defaultValue={userData.tanggal_lahir}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Alamat</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jl. Manggarai Selatan"
                className="text"
                ref={addressField}
                defaultValue={userData.alamat}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                ref={noKKField}
                defaultValue={userData.no_kk}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KTP</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                ref={noNIKField}
                defaultValue={userData.no_nik}
              />
            </Form.Group>

          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label>Agama</Form.Label>
              <select
                className="form-select"
                ref={religionField}
                defaultValue={userData.id_agama}
              // defaultValue={userData.id_agama.nama}
              >
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
              <select
                className="form-select"
                ref={eduField}
              // defaultValue={userData.id_pendidikan.nama}
              >
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
              <select
                className="form-select"
                ref={jobField}
              >
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
              <select
                className="form-select"
                ref={citizenshipField}
              >
                <option hidden>Pilih Salah Satu</option>
                <option value="WNI">WNI</option>
                <option value="WNA">WNA</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Foto</Form.Label>
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
              />
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
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
              />
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

export default InputWarga;