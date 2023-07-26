import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgenda } from "../redux/actions/getAllAgenda";
import NavbarAgenda from "../components/Navbar/NavbarAgenda";
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
      <NavbarAgenda />
      <Activity />
      <CardAgenda agenda={agenda} />
    </>
  )
}

export default Agenda;