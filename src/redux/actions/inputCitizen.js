/* eslint-disable import/prefer-default-export */
// import getCitizenLogin from '../services/getCitizenLogin';
import updateCitizenCloudinary from '../services/updateCitizenCloudinary';
import getEducations from '../services/getListEducation';
import getReligion from '../services/getListReligion';
import getJobs from '../services/getListJob';
import inputCitizen from '../services/inputCitizen';
import timeFormat from '../../utils/timeFormat';
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

      // Get value of tables
      const resultEducation = await getEducations();
      const resultReligion = await getReligion();
      const resultJobs = await getJobs();

      // Loop array of value
      const education = [];
      for(let i = 0; i < resultEducation.data.data.data.length; i++) {
        education.push(resultEducation.data.data.data[i].id)
      }
      const religion = [];
      for(let i = 0; i < resultReligion.data.data.data.length; i++) {
        religion.push(resultReligion.data.data.data[i].id)
      }
      const job = [];
      for(let i = 0; i < resultJobs.data.data.data.length; i++) {
        job.push(resultJobs.data.data.data[i].id)
      }
      
      const bodyUser = {
        nama_lengkap: body.nama_lengkap,
        alamat: body.alamat,
        jenis_kelamin: body.jenis_kelamin,
        tempat_lahir: body.tempat_lahir,
        tanggal_lahir: timeFormat(body.tanggal_lahir),
        id_agama: religion[0],
        id_pendidikan: education[5],
        id_pekerjaan: job[0],
        kewarganegaraan: body.kewarganegaraan,
        foto_kk: resultCloudinary.data.url,
        no_nik: body.no_nik,
        no_kk: body.no_kk,
      };
      const getUserProfile = await inputCitizen(bodyUser);
      console.log(getUserProfile)

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