import React, { useState, useEffect } from "react";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormKegiatan from "../components/Form/Request/FormKegiatan";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getDocumentID } from "../redux/actions/getDocument";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DaftarKegiatan() {
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState([]);
  const [documentData, setDocumentData] = useState([]);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  // const {
  //   documentIDResult,
  // } = useSelector((state) => state.getListDocumentReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  // useEffect(() => {
  //   dispatch(getDocumentID(params.id));
  // }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    // if (documentIDResult) {
    //   setDocumentData(documentIDResult);
    // }
  }, [citizenDataResult]);

  return (
    <>
      <NavbarPendataan userData={userData} />
      <FormKegiatan />
    </>
  )
}

export default DaftarKegiatan;
