import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";

import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import CardWarga from "../components/Cards/Description/CardWarga";
import CardSurat from "../components/Cards/Description/CardSurat";

function DataWarga() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
  }, [citizenDataResult]);

  return (
    <>
      <NavbarPendataan userData={userData} />
      <CardWarga />
      <CardSurat />
    </>
  )
}

export default DataWarga;