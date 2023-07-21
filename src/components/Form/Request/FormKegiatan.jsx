/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { createCitizenEvent } from '../../../redux/actions/createEvent';
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./FormData.scss"

function FormKegiatan({ userData }) {
  const dispatch = useDispatch();
  const params = useParams();

  // Upload Image
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e)
  };

  // Declare Field
  const jenisKegiatanField = useRef("");
  const keteranganKegiatanField = useRef("");

  const {
    createEventLoading,
    createEventResult,
    createEventError,
  } = useSelector((state) => { return state.createEventReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      jenis_kegiatan: jenisKegiatanField.current.value,
      keterangan: keteranganKegiatanField.current.value,
    };
    await dispatch(createCitizenEvent(image, body));
  }

  useEffect(() => {
    console.log(createEventResult);
    if (createEventLoading) {
      setLoading(true);
    } else if (createEventResult) {
      setLoading(false);
      window.location.reload();
      console.log(createEventResult);
    } else if (createEventError) {
      console.log(createEventError);
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

  if (createEventResult) {
    return <Navigate to="/pendataan/warga" />;
  }


  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Jenis Kegiatan</Form.Label>
          <Form.Control
            type="name"
            placeholder="Kegiatan Penyuluhan Lansia"
            className="text"
            ref={jenisKegiatanField}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="form-label">Keterangan</Form.Label>
          <textarea
            class="form-control"
            placeholder="Kegiatan ini diperuntukkan untuk lansia karena..."
            ref={keteranganKegiatanField}
          ></textarea>
        </Form.Group>

        {image && (
          <img src={image} alt="" />
        )}
        {uploadedFileURL
          ? (
            <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" style={{ width: '50%' }} />
          ) : null}
        <Form.Group className="mb-3">
          <Form.Label>Foto Kegiatan</Form.Label>
          <div className="avatar">
            <input
              type="file"
              accept="image/*"
              onChange={handleChangeImage}
              className="avatar-image"
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="input-btn mb-5" style={{ marginTop: "25px" }}
        >
          Input Data
        </Button>
        {loading && (
          <span className="spinner-border spinner-border-sm me-2" />
        )}
      </Form>
    </Container >
  )
}

export default FormKegiatan;