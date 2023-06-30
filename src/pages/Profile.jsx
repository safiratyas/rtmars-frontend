import React, { useState, useEffect } from "react";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getListReligion } from "../redux/actions/getListReligion";
import { getListJob } from "../redux/actions/getListJob";
import { getListEducation } from "../redux/actions/getListEducation";
import { useDispatch, useSelector } from "react-redux";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormProfile from "../components/Form/Request/FormProfile";

function Profile() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [listReligion, setlistReligion] = useState([]);
  const [listJob, setListJob] = useState([]);
  const [listEducation, setListEducation] = useState([]);

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
    if (citizenDataResult) {
      setUserData(citizenDataResult);
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
  }, [citizenDataResult, listReligionResult, listJobResult, listEducationResult]);
  return (
    <>
      <NavbarPendataan userData={userData} />
      <FormProfile
        listReligion={listReligion}
        listJob={listJob}
        listEducation={listEducation}
        userData={userData}
      />
    </>
  )
}

export default Profile;