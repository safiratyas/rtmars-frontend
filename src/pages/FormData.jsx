import React, { useState, useEffect } from "react";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { useDispatch, useSelector } from "react-redux";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormRequest from "../components/Form/Request/FormData";

function FormData() {
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
      <FormRequest />
    </>
  )
}

export default FormData;