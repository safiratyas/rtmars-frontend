import React, { useState, useEffect } from "react";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getListReligion } from "../redux/actions/getListReligion";
import { useDispatch, useSelector } from "react-redux";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormRequest from "../components/Form/Request/FormData";

function FormData() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [religion, setReligion] = useState([])

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    listReligionResult,
  } = useSelector((state) => state.getListReligionReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getListReligion());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (listReligionResult) {
      setReligion(listReligionResult);
    }
  }, [citizenDataResult, listReligionResult]);

  console.log(religion)

  return (
    <>
      <NavbarPendataan userData={userData} />
      <FormRequest religion={religion} />
    </>
  )
}

export default FormData;