import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCitizen } from "../redux/actions/getListCitizen";
import AdminSidebar from "../components/Navbar/AdminSidebar";
import Header from "../components/Header/Header";
import CardDescription from "../components/Cards/Description/CardDescription";
import CardInterest from "../components/Cards/Description/CardInterest";
import Faq from "../components/Accordion/Faq";
import Footer from "../components/Footer/Footer";
import CardSum from "../components/Cards/Description/CardSum";

function DashboardAdmin() {
  const dispatch = useDispatch();
  const [citizenData, setCitizenData] = useState([]);

  const {
    listCitizenResult,
  } = useSelector((state) => state.getListCitizenReducer);

  useEffect(() => {
    dispatch(getAllCitizen());
  }, []);

  useEffect(() => {
    if (listCitizenResult) {
      setCitizenData(listCitizenResult);
    }
  }, [listCitizenResult]);

  return (
    <>
      <AdminSidebar />
      <Header />
      <CardSum citizenData={citizenData} />
      <CardDescription />
      <Faq />
      <CardInterest />
      <Footer />
    </>
  )
}

export default DashboardAdmin;