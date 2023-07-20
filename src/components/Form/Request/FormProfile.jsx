import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateListProfile } from '../../../redux/actions/updateCitizen';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"
import { Navigate } from 'react-router-dom';
import timeFormat from '../../../utils/timeFormat';

function ProfileWarga({ userData }) {
  // Data Profile
  const [loading, setLoading] = useState(false);
  const addressField = useRef("");
  const ageField = useRef("");
  const phoneField = useRef("");
  const dateOfBirthField = useRef("");
  const genderField = useRef("");
  const noKKField = useRef("");
  const noNIKField = useRef("");
  const birthPlaceField = useRef("");

  // Upload Image
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e)
  };

  const {
    profileLoading,
    profileResult,
    profileError,
  } = useSelector((state) => { return state.getProfileReducer; });

  async function handleSubmit(e) {
    console.log(e)
    e.preventDefault();
    const body = {
      alamat: addressField.current.value,
      jenis_kelamin: genderField.current.value,
      no_hp: phoneField.current.value,
      tempat_lahir: birthPlaceField.current.value,
      tanggal_lahir: timeFormat(dateOfBirthField.current.value),
      no_kk: noKKField.current.value,
      no_nik: noNIKField.current.value,
      umur: parseInt(ageField.current.value)
    };
    await dispatch(updateListProfile(image, body));
  }

  useEffect(() => {
    console.log(profileResult);
    if (profileLoading) {
      setLoading(true);
    } else if (profileResult) {
      setLoading(false);
      window.location.reload();
      console.log(profileResult);
    } else if (profileError) {
      console.log(profileError);
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

  if (profileResult) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <div className="img-handle">
            {image && (
              <img src={image} alt="" />
            )}
            {uploadedFileURL
              ? (
                <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" style={{ width: '50%', justifyContent: 'center' }} />
              ) : null}
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  className="avatar-image"
                />
              </div>
            </Form.Group>
          </div>
          <Col xs={6}>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Nama Lengkap</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jane Doe"
                className="text"
                defaultValue={userData.nama_lengkap}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <select
                className="form-select"
                defaultValue={userData.jenis_kelamin}
                // onChange={setGender}
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
                // onChange={setBirthPlace}
                ref={birthPlaceField}
                defaultValue={userData.tempat_lahir}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tanggal Lahir </Form.Label>
              <Form.Control
                type="date"
                placeholder="03/04/1998"
                className="text"
                // onChange={setDateofBirth}
                ref={dateOfBirthField}
                defaultValue={userData.tanggal_lahir}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Usia</Form.Label>
              <Form.Control
                type="name"
                placeholder="37 Tahun"
                className="text"
                ref={ageField}
                // onChange={setAge}
                defaultValue={userData.umur}
              />
            </Form.Group>

          </Col>

          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Alamat</Form.Label>
              <textarea
                class="form-control"
                placeholder="Jl. Manggarai Selatan 1"
                // onChange={setAddress}
                ref={addressField}
                defaultValue={userData.alamat}
                style={{ height: '120px' }}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No Handphone</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                // onChange={setPhoneNumber}
                ref={phoneField}
                defaultValue={userData.no_hp}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                // onChange={setNoKK}
                ref={noKKField}
                defaultValue={userData.no_kk}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KTP</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                // onChange={setNoNIK}
                ref={noNIKField}
                defaultValue={userData.no_nik}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}>
          Input Data
          {loading && (
            <span className="spinner-border spinner-border-sm me-2" />
          )}
        </Button>
      </Form>
    </Container >
  )
}

export default ProfileWarga;