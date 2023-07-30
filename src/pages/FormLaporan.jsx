import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import FormLaporan from "../components/Form/Request/FormLaporan";
import CardAdminError from "../components/Cards/Description/CardAdminError";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
// import { getDocumentID } from "../redux/actions/getDocument";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function LaporanBulanan() {
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);


  useEffect(() => {
    if (adminDataResult) {
      setUserData(adminDataResult);
    }
  }, [adminDataResult]);

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
      <FormLaporan userData={userData} />
    </>
  ) : (
    <CardAdminError />
  )
}

export default LaporanBulanan;
