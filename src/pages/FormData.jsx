import React, { useState, useEffect } from "react";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getListReligion } from "../redux/actions/getListReligion";
import { getListJob } from "../redux/actions/getListJob";
import { useDispatch, useSelector } from "react-redux";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormRequest from "../components/Form/Request/FormData";

function FormData() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listReligion, setlistReligion] = useState([]);
  const [listJob, setListJob] = useState([]);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    listReligionResult,
  } = useSelector((state) => state.getListReligionReducer);

  const {
    listJobResult,
  } = useSelector((state) => state.getListJobReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(getListReligion());
  }, []);

  useEffect(() => {
    dispatch(getListJob());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (listReligionResult) {
      setlistReligion(listReligionResult);
    }
    if (listJobResult) {
      setListJob(listJobResult);
    }
  }, [citizenDataResult, listReligionResult, listJobResult]);


  return (
    <>
      <NavbarPendataan userData={userData} />
      <FormRequest
        listReligion={listReligion}
        listJob={listJob}
      />
    </>
  )
}

export default FormData;