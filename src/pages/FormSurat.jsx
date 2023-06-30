import React, { useState, useEffect } from "react";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormSurat from "../components/Form/Request/FormSurat";
import CardSurat from "../components/Cards/Description/CardSurat";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { getAllDocument } from "../redux/actions/getListDocument";
import { useDispatch, useSelector } from "react-redux";

function SuratWarga() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [documentData, setDocumentData] = useState([]);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    listDocResult,
  } = useSelector((state) => state.getListDocumentReducer);

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    dispatch(listDocResult());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
    if (listDocResult) {
      setDocumentData(listDocResult);
    }
  }, [citizenDataResult, listDocResult]);
  return (
    <>
      <NavbarPendataan userData={userData} />
      <FormSurat userData={userData} />
      <CardSurat
        userData={userData}
        documentData={documentData}
      />
    </>
  )
}

export default SuratWarga;