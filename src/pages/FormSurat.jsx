import React, { useState, useEffect } from "react";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormSurat from "../components/Form/Request/FormSurat";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { useDispatch, useSelector } from "react-redux";

function SuratWarga() {
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
      <FormSurat />
    </>
  )
}

export default SuratWarga;