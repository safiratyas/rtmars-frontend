import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";

import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import Activity from "../components/Carousel/Activity";
import CardAgenda from "../components/Cards/Description/CardAgenda";

function Agenda() {
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
      <Activity />
      <CardAgenda />
    </>
  )
}

export default Agenda;