/* eslint-disable import/prefer-default-export */
// import getCitizenLogin from '../services/getCitizenLogin';
import updateCitizenCloudinary from '../services/updateCitizenCloudinary';
import inputCitizen from '../services/inputCitizen';
import {
  CREATE_CITIZEN_DATA
} from './types';

export const createCitizen = (image, body) => {
  return async (
    dispatch,
  ) => {
    try {
      // GET API USER
      const cloudinaryUpload = new FormData();
      cloudinaryUpload.append('picture', image);
      const resultCloudinary = await updateCitizenCloudinary(cloudinaryUpload);
      const bodyUser = {
        nama_lengkap: body.nama_lengkap,
        alamat: body.alamat,
        jenis_kelamin: body.jenis_kelamin,
        tempat_lahir: body.tempat_lahir,
        tanggal_lahir: body.tanggal_lahir,
        id_agama: body.id_agama,
        id_pendidikan: body.id_pendidikan,
        id_pekerjaan: body.id_pekerjaan,
        kewarganegaraan: body.kewarganegaraan,
        foto_kk: resultCloudinary.data.url,
        no_nik: body.no_nik,
        no_kk: body.no_kk,

      };
      const getUserProfile = await inputCitizen(bodyUser);

      await dispatch({
        type: CREATE_CITIZEN_DATA,
        payload: {
          loading: false,
          result: await getUserProfile.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_CITIZEN_DATA,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};