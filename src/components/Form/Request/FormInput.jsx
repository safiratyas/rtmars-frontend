import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createCitizen } from '../../../redux/actions/inputCitizen';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"
import { Navigate } from "react-router-dom";
// import timeFormat from '../../../utils/timeFormat';

function InputWarga({ listReligion, listJob, listEducation, userData }) {
  const dispatch = useDispatch();

  // Upload Image
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e)
  };

  const {
    createCitizenLoading,
    createCitizenResult,
    createCitizenError,
  } = useSelector((state) => { return state.createCitizenReducer; });

  // Declare Field
  const nameField = useRef("");
  const genderField = useRef("");
  const birthPlaceField = useRef("");
  const dateOfBirthField = useRef("");
  const addressField = useRef("");
  const noKKField = useRef("");
  const noNIKField = useRef("");
  const religionField = useRef(0);
  const eduField = useRef(0);
  const jobField = useRef(0);
  const citizenshipField = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      nama_lengkap: nameField.current.value,
      alamat: addressField.current.value,
      jenis_kelamin: genderField.current.value,
      tempat_lahir: birthPlaceField.current.value,
      tanggal_lahir: dateOfBirthField.current.value,
      // tanggal_lahir: "2006-04-12",
      id_agama: religionField.current.value,
      id_pendidikan: eduField.current.value,
      id_pekerjaan: jobField.current.value,
      kewarganegaraan: citizenshipField.current.value,
      no_nik: noNIKField.current.value,
      no_kk: noKKField.current.value
    };
    await dispatch(createCitizen(image, body));
  }

  useEffect(() => {
    console.log(createCitizenResult);
    if (createCitizenLoading) {
      setLoading(true);
    } else if (createCitizenResult) {
      setLoading(false);
      window.location.reload();
      console.log(createCitizenResult);
    } else if (createCitizenError) {
      console.log(createCitizenError);
    }
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

  if (createCitizenResult) {
    return <Navigate to="/pendataan/warga" />;
  }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Nama Lengkap</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jane Doe"
                className="text"
                ref={nameField}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <select
                className="form-select"
                ref={genderField}
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
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                placeholder="03/04/1998"
                className="text"
                ref={dateOfBirthField}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Alamat</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jl. Manggarai Selatan"
                className="text"
                ref={addressField}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                ref={noKKField}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KTP</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxxxxx"
                className="text"
                ref={noNIKField}
              />
            </Form.Group>

          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label>Agama</Form.Label>
              <select
                className="form-select"
                ref={religionField}
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

            {image && (
              <img src={image} alt="" />
            )}
            {uploadedFileURL
              ? (
                <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" style={{ width: '50%' }} />
              ) : null}
            <Form.Group className="mb-3">
              <Form.Label>Upload KK</Form.Label>
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  className="avatar-image"
                />
              </div>
            </Form.Group>

            {/* <Form.Group className="mb-3">
              <Form.Label>Upload KTP</Form.Label>
              <input class="form-control" type="file" id="formFile"
                src={uploadedFileURL}
                onChange={handleChangeImage}
              />
            </Form.Group> */}

            <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}>
              Input Data
              {loading && (
                <span className="spinner-border spinner-border-sm me-2" />
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container >
  )
}

export default InputWarga;