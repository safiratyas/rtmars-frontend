/* eslint-disable react-hooks/exhaustive-deps */
// Configuration
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAdminLogin } from "../redux/actions/getAdminLogin"

import NavbarHomepage from "../components/Navbar/NavbarHome";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
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
  const [adminData, setAdminData] = useState([])
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);


  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (adminDataResult) {
      setAdminData(adminDataResult);
    }
  }, [citizenDataResult, adminDataResult]);

  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  console.log(userData)
  console.log(adminData)

  return isLoggedIn ? (
    <>
      <NavbarProfile
        userData={userData}
        adminData={adminData}
      />
      <Header />
      <CardSum />
      <CardDescription />
      <Faq />
      <CardInterest />
      <Footer />
    </>
  ) : (
    <>
      <NavbarHomepage />
      <Header />
      <CardDescription />
      <CardInterest />
      <Footer />
    </>
  )
}

export default Homepage