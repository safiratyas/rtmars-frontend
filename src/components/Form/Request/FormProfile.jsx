import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateListProfile } from '../../../redux/actions/updateCitizen';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"
import { useParams } from "react-router-dom";

function ProfileWarga({ userData }) {
  // Data Profile
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateofBirth] = useState('');
  const [gender, setGender] = useState('');
  const [noKK, setNoKK] = useState('');
  const [noNIK, setNoNIK] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [loading, setLoading] = useState(false);

  // Upload Image
  const [image, setImage] = useState(null);
  // const [image2, setImage2] = useState(null);
  // const [image3, setImage3] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  // const [uploadedFileURL2, setUploadedFileURL2] = useState(null);
  // const [uploadedFileURL3, setUploadedFileURL3] = useState(null);

  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e)
  };

  // const handleChangeImage2 = (e) => {
  //   setImage2(e.target.files[0]);
  //   console.log(e)
  // };

  // const handleChangeImage3 = (e) => {
  //   setImage3(e.target.files[0]);
  //   console.log(e)
  // };

  const {
    profileLoading,
    profileResult,
    profileError,
  } = useSelector((state) => { return state.getProfileReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      alamat: address,
      jenis_kelamin: gender,
      no_hp: phoneNumber,
      tempat_lahir: birthPlace,
      tanggal_lahir: "1997-10-22",
      no_kk: noKK,
      no_nik: noNIK,
      umur: parseInt(age)
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

  // useEffect(() => {
  //   let fileReader = false;
  //   let isCancel = false;
  //   console.log(image2);
  //   if (image2) {
  //     fileReader = new FileReader();
  //     fileReader.onload = (e) => {
  //       const { result } = e.target;
  //       if (result && !isCancel) {
  //         setUploadedFileURL2(result);
  //       }
  //     };
  //     fileReader.readAsDataURL(image2);
  //   }
  //   return () => {
  //     isCancel = true;
  //     if (fileReader && fileReader.readyState === 1) {
  //       fileReader.abort();
  //     }
  //   };
  // });

  // useEffect(() => {
  //   let fileReader = false;
  //   let isCancel = false;
  //   console.log(image2);
  //   if (image3) {
  //     fileReader = new FileReader();
  //     fileReader.onload = (e) => {
  //       const { result } = e.target;
  //       if (result && !isCancel) {
  //         setUploadedFileURL3(result);
  //       }
  //     };
  //     fileReader.readAsDataURL(image3);
  //   }
  //   return () => {
  //     isCancel = true;
  //     if (fileReader && fileReader.readyState === 1) {
  //       fileReader.abort();
  //     }
  //   };
  // });

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
                defaultValue={userData.nama_lengkap}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <select
                className="form-select"
                defaultValue={userData.jenis_kelamin}
                onChange={setGender}
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
                onChange={setBirthPlace}
                defaultValue={userData.tempat_lahir}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Tanggal Lahir </Form.Label>
              <Form.Control
                type="date"
                placeholder="03/04/1998"
                className="text"
                onChange={setDateofBirth}
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
                onChange={setAge}
                defaultValue={userData.umur}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">Alamat</Form.Label>
              <textarea
                class="form-control"
                placeholder="Jl. Manggarai Selatan 1"
                onChange={setAddress}
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
                placeholder="31xxxxxxxxxx"
                className="text"
                onChange={setPhoneNumber}
                defaultValue={userData.no_hp}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KK</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                onChange={setNoKK}
                defaultValue={userData.no_kk}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">No KTP</Form.Label>
              <Form.Control
                type="name"
                placeholder="31xxxxxxxxxx"
                className="text"
                onChange={setNoNIK}
                defaultValue={userData.no_nik}
              />
            </Form.Group>
            {image && (
              <img src={image} alt="" />
            )}
            {uploadedFileURL
              ? (
                <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" />
              ) : null}
            <Form.Group className="mb-3">
              <Form.Label>Upload Foto</Form.Label>
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  className="avatar-image"
                />
              </div>
            </Form.Group>

            {/* {image2 && (
              <img src={image2} alt="" />
            )}
            {uploadedFileURL2
              ? (
                <img src={uploadedFileURL2} alt="preview" className="img-preview-wrapper" />
              ) : null}
            <Form.Group className="mb-3">
              <Form.Label>Upload KK</Form.Label>
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage2}
                  className="avatar-image"
                />
              </div>
            </Form.Group>

            {image3 && (
              <img src={image3} alt="" />
            )}
            {uploadedFileURL3
              ? (
                <img src={uploadedFileURL3} alt="preview" className="img-preview-wrapper" />
              ) : null}
            <Form.Group className="mb-3">
              <Form.Label>Upload KTP</Form.Label>
              <div className="avatar">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage3}
                  className="avatar-image"
                />
              </div>
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

export default ProfileWarga;