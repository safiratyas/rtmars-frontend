/* eslint-disable react-hooks/exhaustive-deps */
// Configuration
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAdminLogin } from "../redux/actions/getAdminLogin"
import { getAllCitizen } from "../redux/actions/getListCitizen";
import { getNotificationCitizen } from "../redux/actions/notificationCitizen";
import { getTotalCitizen } from "../redux/actions/getTotalCitizen";
import NavbarHomepage from "../components/Navbar/NavbarHome";
import NavbarProfile from "../components/Navbar/NavbarProfile";
import Header from "../components/Header/Header";
import CardDescription from "../components/Cards/Description/CardDescription";
import CardInterest from "../components/Cards/Description/CardInterest";
import Faq from "../components/Accordion/Faq";
import Footer from "../components/Footer/Footer";
import CardSum from "../components/Cards/Description/CardSum";

function Homepage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [citizenData, setCitizenData] = useState([]);
  const [notification, setNotification] = useState([]);
  const [total, setTotal] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  const {
    listCitizenResult,
  } = useSelector((state) => state.getListCitizenReducer);

  const {
    listCitizenNotificationResult,
  } = useSelector((state) => state.getListCitizenNotification);

  const {
    totalCitizenResult,
  } = useSelector((state) => state.getTotalCitizenReducer);

  useEffect(() => {
    dispatch(getAllCitizen());
  }, []);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);

  useEffect(() => {
    dispatch(getNotificationCitizen());
  }, []);

  useEffect(() => {
    dispatch(getTotalCitizen());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (adminDataResult) {
      setAdminData(adminDataResult);
    }
    if (listCitizenResult) {
      setCitizenData(listCitizenResult);
    }
    if (listCitizenNotificationResult) {
      setNotification(listCitizenNotificationResult);
    }
    if (totalCitizenResult) {
      setTotal(totalCitizenResult);
    }
  }, [citizenDataResult, adminDataResult, listCitizenResult, listCitizenNotificationResult, totalCitizenResult]);

  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  console.log(notification)

  return isLoggedIn ? (
    <>
      <NavbarProfile
        userData={userData}
        notification={notification}
      />
      <Header />
      <CardSum total={total} />
      <CardDescription />
      <Faq />
      <CardInterest />
      <Footer />
    </>
  ) : (
    <>
      <NavbarHomepage />
      <Header />
      <CardSum total={total} />
      <Faq />
      <CardDescription />
      <CardInterest />
      <Footer />
    </>
  )
}

export default Homepage