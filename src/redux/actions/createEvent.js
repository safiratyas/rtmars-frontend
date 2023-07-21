/* eslint-disable import/prefer-default-export */
// import getCitizenLogin from '../services/getCitizenLogin';
import updateCitizenCloudinary from '../services/updateCitizenCloudinary';
import createEvent from '../services/createEvent';

import {
  CREATE_EVENT_DATA
} from './types';

export const createCitizenEvent = (image, body) => {
  return async (
    dispatch,
  ) => {
    try {
      // GET API USER
      const cloudinaryUpload = new FormData();
      cloudinaryUpload.append('picture', image);
      const resultCloudinary = await updateCitizenCloudinary(cloudinaryUpload);

      const bodyUser = {
        jenis_kegiatan: body.jenis_kegiatan,
        keterangan: body.keterangan,
        foto_kegiatan: resultCloudinary.data.url,
      };
      const getEventData = await createEvent(bodyUser);
      console.log(getEventData)

      await dispatch({
        type: CREATE_EVENT_DATA,
        payload: {
          loading: false,
          result: await getEventData.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_EVENT_DATA,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};