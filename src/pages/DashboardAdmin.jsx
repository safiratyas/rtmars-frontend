import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCitizen } from "../redux/actions/getListCitizen";
import { getNotificationCitizen } from "../redux/actions/notificationAdmin";
import { getTotalCitizen } from "../redux/actions/getTotalCitizen";
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
  const [notification, setNotification] = useState([]);
  const [total, setTotal] = useState([]);

  const {
    listCitizenResult,
  } = useSelector((state) => state.getListCitizenReducer);

  const {
    listAdminNotificationResult,
  } = useSelector((state) => state.getListAdminNotification);

  const {
    totalCitizenResult,
  } = useSelector((state) => state.getTotalCitizenReducer);

  useEffect(() => {
    dispatch(getAllCitizen());
  }, []);

  useEffect(() => {
    dispatch(getNotificationCitizen());
  }, []);

  useEffect(() => {
    dispatch(getTotalCitizen());
  }, []);

  useEffect(() => {
    if (listCitizenResult) {
      setCitizenData(listCitizenResult);
    }
    if (listAdminNotificationResult) {
      setNotification(listAdminNotificationResult);
    }
    if (totalCitizenResult) {
      setTotal(totalCitizenResult);
    }
  }, [listCitizenResult, listAdminNotificationResult, totalCitizenResult]);

  console.log(total)

  return (
    <>
      <AdminSidebar notification={notification} />
      <Header />
      <CardSum total={total} />
      <CardDescription />
      <Faq />
      <CardInterest />
      <Footer />
    </>
  )
}

export default DashboardAdmin;