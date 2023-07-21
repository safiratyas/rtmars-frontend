import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAllAgenda } from "../redux/actions/getAllAgenda";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import Activity from "../components/Carousel/Activity";
import CardAgenda from "../components/Cards/Description/CardAgenda";

function Agenda() {
  const dispatch = useDispatch();
  const [agenda, setAgenda] = useState([]);

  const {
    listAgendaResult,
  } = useSelector((state) => state.getListAgendaReducer);

  useEffect(() => {
    dispatch(getAllAgenda());
  }, []);

  useEffect(() => {
    if (listAgendaResult) {
      setAgenda(listAgendaResult);
    }
  }, [listAgendaResult]);

  return (
    <>
      {/* <NavbarPendataan userData={userData} /> */}
      <Activity />
      <CardAgenda agenda={agenda} />
    </>
  )
}

export default Agenda;