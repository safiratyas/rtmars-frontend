import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
import { getAllCitizen } from "../redux/actions/getListCitizen"

import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import CardWarga from "../components/Cards/Description/CardWarga";
import CardAdminError from "../components/Cards/Description/CardAdminError";

function DataWarga() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listCitizen, setListCitizen] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  const {
    listCitizenResult,
  } = useSelector((state) => state.getListCitizenReducer);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);

  useEffect(() => {
    dispatch(getAllCitizen());
  }, []);

  useEffect(() => {
    if (adminDataResult) {
      setUserData(adminDataResult);
    }
    if (listCitizenResult) {
      setListCitizen(listCitizenResult)
    }
  }, [adminDataResult, listCitizenResult]);

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
      <CardWarga listCitizen={listCitizen} />
    </>
  ) : (
    <CardAdminError />
  )
}

export default DataWarga;