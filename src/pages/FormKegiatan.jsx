import React, { useState, useEffect } from "react";
import NavbarAdmin from "../components/Navbar/NavbarAdmin";
import FormKegiatan from "../components/Form/Request/FormKegiatan";
import { getAdminLogin } from "../redux/actions/getAdminLogin";
// import { getDocumentID } from "../redux/actions/getDocument";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DaftarKegiatan() {
  const dispatch = useDispatch();
  const params = useParams();
  const [userData, setUserData] = useState([]);
  // const [documentData, setDocumentData] = useState([]);

  const {
    adminDataResult,
  } = useSelector((state) => state.getAdminLoginReducer);

  useEffect(() => {
    dispatch(getAdminLogin());
  }, []);


  useEffect(() => {
    if (adminDataResult) {
      setUserData(adminDataResult);
    }
  }, [adminDataResult]);

  return (
    <>
      <NavbarAdmin userData={userData} />
      <FormKegiatan userData={userData} />
    </>
  )
}

export default DaftarKegiatan;
