/* eslint-disable react-hooks/exhaustive-deps */
// Configuration
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";

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
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

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

  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  console.log(isLoggedIn)

  return isLoggedIn ? (
    <>
      <NavbarProfile userData={userData} />
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