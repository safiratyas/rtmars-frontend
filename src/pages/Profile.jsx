import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { getCitizenLogin } from "../redux/actions/getCitizenLogin";
import { useDispatch, useSelector } from "react-redux";
import { updateListProfile } from "../redux/actions/updateCitizen";
import NavbarPendataan from "../components/Navbar/NavbarPendataan";
import FormProfile from "../components/Form/Request/FormProfile";

function Profile() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [dateOfBirth, setDateofBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Upload Image
  // Upload Image
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    citizenDataResult,
  } = useSelector((state) => state.getCitizenLoginReducer);

  const {
    profileLoading,
    profileResult,
    profileError
  } = useSelector((state) => state.getProfileReducer);

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      tempat_lahir: placeOfBirth,
      tanggal_lahir: dateOfBirth,
      no_hp: phoneNumber,
      alamat: address,
      umur: age
    };
    await dispatch(updateListProfile(image, body));
  }

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getCitizenLogin());
  }, []);

  useEffect(() => {
    if (citizenDataResult) {
      setUserData(citizenDataResult);
    }
  }, [citizenDataResult]);

  useEffect(() => {
    console.log(profileLoading, profileResult);
    if (profileLoading) {
      setLoading(true);
    } else if (profileResult) {
      setLoading(false);
      window.location.reload();
      console.log(profileResult);
    } else if (profileError) {
      console.log(profileError);
    }
    let fileReader = false;
    let isCancel = false;
    console.log(image);
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setUploadedFileURL(result);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  });

  if (profileResult) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavbarPendataan userData={userData} />
      <FormProfile
        userData={userData}
      />
    </>
  )
}

export default Profile;