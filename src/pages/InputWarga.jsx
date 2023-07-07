/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
import { getListReligion } from "../redux/actions/getListReligion";
import { getListJob } from "../redux/actions/getListJob";
import { getListEducation } from "../redux/actions/getListEducation";
import { useDispatch, useSelector } from "react-redux";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import FormInput from "../components/Form/Request/FormInput";

function InputWarga() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listReligion, setlistReligion] = useState([]);
  const [listJob, setListJob] = useState([]);
  const [listEducation, setListEducation] = useState([]);

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  const {
    listReligionResult,
  } = useSelector((state) => state.getListReligionReducer);

  const {
    listJobResult,
  } = useSelector((state) => state.getListJobReducer);

  const {
    listEducationResult,
  } = useSelector((state) => state.getListEducationReducer);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);

  useEffect(() => {
    dispatch(getListReligion());
  }, []);

  useEffect(() => {
    dispatch(getListJob());
  }, []);

  useEffect(() => {
    dispatch(getListEducation());
  }, []);

  useEffect(() => {
    if (adminDataResult) {
      setUserData(adminDataResult);
    }
    if (listReligionResult) {
      setlistReligion(listReligionResult);
    }
    if (listJobResult) {
      setListJob(listJobResult);
    }
    if (listEducationResult) {
      setListEducation(listEducationResult);
    }
  }, [adminDataResult, listReligionResult, listJobResult, listEducationResult]);

  console.log(listEducation)
  return (
    <>
      <NavbarAdmin userData={userData} />
      <FormInput
        listReligion={listReligion}
        listJob={listJob}
        listEducation={listEducation}
        userData={userData}
      />
    </>
  )
}

export default InputWarga;