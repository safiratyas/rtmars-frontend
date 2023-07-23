import React, { useState, useEffect } from "react";
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { useDispatch, useSelector } from "react-redux";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormProfile from "../components/Form/Request/FormProfile";
import CardError from "../components/Cards/Description/CardError";

function Profile() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);

  // Check Login
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');

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
      <NavbarPendataan userData={userData} />
      <FormProfile
        userData={userData}
      />
    </>
  ) : (
    <CardError />
  )
}

export default Profile;