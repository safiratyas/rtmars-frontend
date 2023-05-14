import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAllCitizen } from "../redux/actions/getListCitizen"
import { getListAdmin } from "../redux/actions/getListAdmin";

import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import CardPengurus from "../components/Cards/Description/CardPengurus";

function DataPengurus() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listAdmin, setListAdmin] = useState([]);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    listAdminDataResult,
  } = useSelector((state) => state.getListAdminReducer);

  useEffect(() => {
    dispatch(getListAdmin());
  }, []);

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
    if (listAdminDataResult) {
      setListAdmin(listAdminDataResult)
    }
  }, [citizenDataResult, listAdminDataResult]);

  console.log(listAdmin)

  return (
    <>
      <NavbarPendataan userData={userData} />
      <CardPengurus
        userData={userData}
        listAdmin={listAdmin}
      />
    </>
  )
}

export default DataPengurus;