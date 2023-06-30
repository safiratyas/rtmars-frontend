import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
import { getAllCitizen } from "../redux/actions/getListCitizen"

import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import CardWarga from "../components/Cards/Description/CardWarga";

function DataWarga() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listCitizen, setListCitizen] = useState([]);

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

  console.log(listCitizen)

  return (
    <>
      <NavbarAdmin userData={userData} />
      <CardWarga listCitizen={listCitizen} />
    </>
  )
}

export default DataWarga;