import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAllDocument } from "../redux/actions/getListDocument";
import { useParams } from "react-router-dom";

import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import CardSurat from "../components/Cards/Description/CardSurat";
import CardError from "../components/Cards/Description/CardError";

function DataSurat() {
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState([]);
  const [documentData, setDocumentData] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const id = params.id
  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    listDocResult,
  } = useSelector((state) => state.getListDocumentReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getAllDocument());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (listDocResult) {
      setDocumentData(listDocResult);
    }

  }, [citizenDataResult, listDocResult]);

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
      <CardSurat
        userData={userData}
        documentData={documentData}
      />
    </>
  ) : (
    <CardError />
  )
}

export default DataSurat;