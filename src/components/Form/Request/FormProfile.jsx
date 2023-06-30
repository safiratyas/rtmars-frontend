import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"
import { useParams } from "react-router-dom";

function ProfileWarga({ listReligion, listJob, listEducation, userData }) {
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
  const noHpField = useRef("");
  const ageField = useRef("");
  const userPhoto = useRef("");
  const userKK = useRef("");
  const userNIK = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: ""
  })

  const submitCitizen = async (e) => {
    e.preventDefault();

    try {
      const userToUpdatePayload = {
        // nama_lengkap: nameField.current.value,
        alamat: addressField.current.value,
        // jenis_kelamin: genderField.current.value,
        tempat_lahir: birthPlaceField.current.value,
        tanggal_lahir: birthPlaceField.current.value,
        umur: ageField.current.value,
        // no_kk: noKKField.current.value,
        // no_ktp: noNIKField.current.value,
        no_hp: noHpField.current.value,
        foto_warga: userPhoto.current.value,
        foto_kk: userKK.current.value,
        foto_ktp: userNIK.current.value
      }

      // console.log(userToUpdatePayload + " Lewat Sini")

      const updateRequest = await axios.put(
        `http://localhost:3000/api/citizens/update/profile/${userData.id}`, userToUpdatePayload
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
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <select
                className="form-select"
                ref={genderField}
                defaultValue={userData.jenis_kelamin}
                disabled
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
              <Form.Label className="form-label">Usia</Form.Label>
              <Form.Control
                type="name"
                placeholder="37 Tahun"
                className="text"
                ref={ageField}
                defaultValue={userData.umur}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Alamat</Form.Label>
              <textarea
                class="form-control"
                placeholder="Jl. Manggarai Selatan 1"
                ref={addressField}
                defaultValue={userData.alamat}
                style={{ height: '120px' }}
              ></textarea>
            </Form.Group>
          </Col>

          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">No Handphone</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                ref={noHpField}
                defaultValue={userData.no_hp}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                ref={noKKField}
                defaultValue={userData.no_kk}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KTP</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                ref={noNIKField}
                defaultValue={userData.no_nik}
                disabled
              />
            </Form.Group>
            {image && (
              <img src={image} alt="" />
            )}
            {uploadedFileURL
              ? (
                <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" />
              ) : null}
            <div className="avatar">
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                className="avatar-image"
              />
            </div>
            {/* <Form.Group className="mb-3">
              <Form.Label>Upload Foto</Form.Label>
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
                defaultValue={userData.foto_warga}
              />
            </Form.Group> */}

            <Form.Group className="mb-3">
              <Form.Label>Upload KK</Form.Label>
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
                defaultValue={userData.foto_kk}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload KTP</Form.Label>
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
                defaultValue={userData.foto_ktp}
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

export default ProfileWarga;