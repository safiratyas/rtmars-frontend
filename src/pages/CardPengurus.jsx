import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAllCitizen } from "../redux/actions/getListCitizen"

import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import CardPengurus from "../components/Cards/Description/CardPengurus";

function DataPengurus() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listCitizen, setListCitizen] = useState([]);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    listCitizenResult,
  } = useSelector((state) => state.getListCitizenReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getAllCitizen());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (listCitizenResult) {
      setListCitizen(listCitizenResult)
    }
  }, [citizenDataResult, listCitizenResult]);

  console.log(listCitizen)

  return (
    <>
      <NavbarPendataan userData={userData} />
      <CardPengurus listCitizen={listCitizen} />
    </>
  )
}

export default DataPengurus;