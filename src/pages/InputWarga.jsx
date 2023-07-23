/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getListReligion } from "../redux/actions/getListReligion";
import { getListJob } from "../redux/actions/getListJob";
import { getListEducation } from "../redux/actions/getListEducation";
import { useDispatch, useSelector } from "react-redux";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import FormInput from "../components/Form/Request/FormInput";
import CardAdminError from "../components/Cards/Description/CardAdminError";

function InputWarga() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [citizenData, setCitizenData] = useState([]);
  const [listReligion, setlistReligion] = useState([]);
  const [listJob, setListJob] = useState([]);
  const [listEducation, setListEducation] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

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
    dispatch(getCitizenLogin());
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
    if (citizenDataResult) {
      setCitizenData(citizenDataResult);
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
  }, [adminDataResult, citizenDataResult, listReligionResult, listJobResult, listEducationResult]);

  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return isLoggedIn ? (
    <>
      <NavbarAdmin userData={userData} />
      <FormInput
        listReligion={listReligion}
        listJob={listJob}
        listEducation={listEducation}
        userData={userData}
        citizenData={citizenData}
      />
    </>
  ) : (
    <CardAdminError />
  )
}

export default InputWarga;