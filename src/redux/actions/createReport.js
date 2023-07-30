/* eslint-disable import/prefer-default-export */
// import getCitizenLogin from '../services/getCitizenLogin';
import createCitizenReport from '../services/createReport';
import checkBoolean from '../../utils/checkBoolean';
import {
  CREATE_REPORT_DATA
} from './types';

export const createReport = (body) => {
  return async (
    dispatch,
  ) => {
    try {
      const bodyUser = {
        jumlah_rumah: parseInt(body.jumlah_rumah),
        jumlah_keluarga: parseInt(body.jumlah_keluarga),
        jumlah_warga: parseInt(body.jumlah_warga),
        jumlah_bayi: parseInt(body.jumlah_bayi),
        jumlah_meninggal: parseInt(body.jumlah_meninggal),
        jumlah_pindahan: parseInt(body.jumlah_pindahan),
        kegiatan_pancasila: checkBoolean(body.kegiatan_pancasila),
        kegiatan_gotong_royong: checkBoolean(body.kegiatan_gotong_royong),
        kegiatan_pangan: checkBoolean(body.kegiatan_pangan),
        kegiatan_sandang: checkBoolean(body.kegiatan_sandang),
        kegiatan_tata_laksana: checkBoolean(body.kegiatan_tata_laksana),
        kegiatan_pendidikan_terampil: checkBoolean(body.kegiatan_pendidikan_terampil),
        kegiatan_kesehatan: checkBoolean(body.kegiatan_kesehatan),
        kegiatan_pengembangan_koperasi: checkBoolean(body.kegiatan_pengembangan_koperasi),
        kegiatan_kelestarian: checkBoolean(body.kegiatan_kelestarian),
        kegiatan_perencanaan_sehat: checkBoolean(body.kegiatan_perencanaan_sehat),
      };
      const getReportData = await createCitizenReport(bodyUser);
      console.log(getReportData)

      await dispatch({
        type: CREATE_REPORT_DATA,
        payload: {
          loading: false,
          result: await getReportData.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_REPORT_DATA,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};