import React from "react";
import NavbarHomepage from "../components/Navbar/NavbarHome";
import Header from "../components/Header/Header";
import CardDescription from "../components/Cards/Description/CardDescription";

function Homepage() {
  return (
    <>
      <NavbarHomepage />
      <Header />
      <CardDescription />
    </>
  )
}

export default Homepage