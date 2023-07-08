/* eslint-disable import/prefer-default-export */
import getCitizenLogin from '../services/getCitizenLogin';
import updateUserCloudinary from '../services/updateCloudinary';
import updateUserDetail from '../services/updateCitizen';
import {
  UPDATE_PROFILE_CITIZEN
} from './types';

export const updateListProfile = (image, body) => {
  return async (
    dispatch,
  ) => {
    try {
      // GET API USER
      const getUserById = await getCitizenLogin();
      console.log(getUserById)
      const cloudinaryUpload = new FormData();
      cloudinaryUpload.append('picture', image);
      const resultCloudinary = await updateUserCloudinary(getUserById.data.id, cloudinaryUpload);
      const bodyUser = {
        jenis_kelamin: body.jenis_kelamin,
        tempat_lahir: body.tempat_lahir,
        tanggal_lahir: body.tanggal_lahir,
        umur: body.umur,
        no_kk: body.no_kk,
        no_nik: body.no_nik,
        alamat: body.alamat,
        no_hp: body.no_hp,
        foto_warga: resultCloudinary.data.url,
        // foto_kk: resultCloudinary.data.url,
        // foto_ktp: resultCloudinary.data.url,
      };
      const getUserProfile = await updateUserDetail(getUserById.data.id, bodyUser);
      console.log(getCitizenLogin.data);
      await dispatch({
        type: UPDATE_PROFILE_CITIZEN,
        payload: {
          loading: false,
          result: await getUserProfile.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_PROFILE_CITIZEN,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};