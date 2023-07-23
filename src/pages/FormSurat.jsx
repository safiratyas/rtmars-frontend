import React, { useState, useEffect } from "react";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormSurat from "../components/Form/Request/FormSurat";
import CardError from "../components/Cards/Description/CardError";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getDocumentID } from "../redux/actions/getDocument";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SuratWarga() {
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState([]);
  const [documentData, setDocumentData] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    documentIDResult,
  } = useSelector((state) => state.getListDocumentReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getDocumentID(params.id));
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (documentIDResult) {
      setDocumentData(documentIDResult);
    }
  }, [citizenDataResult, documentIDResult]);

  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return isLoggedIn ? (
    <>
      <NavbarPendataan userData={userData} />
      <FormSurat userData={userData} />
    </>
  ) : (
    <CardError />
  )
}

export default SuratWarga;