import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
// import { getDocumentID } from "../redux/actions/getDocument";
import { getAllDocument } from "../redux/actions/getListDocument";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import CardListSurat from "../components/Cards/Description/CardListSurat"
import CardAdminError from "../components/Cards/Description/CardAdminError";

function ListDokumen() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [documentData, setDocumentData] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  const {
    listDocResult,
  } = useSelector((state) => state.getListDocumentReducer);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);

  useEffect(() => {
    dispatch(getAllDocument());
  }, []);

  useEffect(() => {
    if (adminDataResult) {
      setUserData(adminDataResult);
    }
    if (listDocResult) {
      setDocumentData(listDocResult);
    }

  }, [adminDataResult, listDocResult]);

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
      <NavbarAdmin userData={userData} />
      <CardListSurat
        userData={userData}
        documentData={documentData}
      />
    </>
  ) : (
    <CardAdminError />
  )
}

export default ListDokumen;