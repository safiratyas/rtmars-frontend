import React from "react";
import NavbarHomepage from "../components/Navbar/NavbarHome";
import Header from "../components/Header/Header";
import CardDescription from "../components/Cards/Description/CardDescription";
import CardInterest from "../components/Cards/Description/CardInterest";
import Faq from "../components/Accordion/Faq";
import Footer from "../components/Footer/Footer";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <Header />
      <CardDescription />
      <Faq />
      <CardInterest />
      <Footer />
    </>
  )
}

export default Homepage