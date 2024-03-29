/* eslint-disable import/prefer-default-export */
import {
  GET_CITIZEN_ID
} from './types';
import citizen from '../services/getCitizen';

export const getListId = (id) => {
  return async (dispatch) => {
    try {
      const getListById = await citizen(id);
      console.log(getListById)
      await dispatch({
        type: GET_CITIZEN_ID,
        payload: {
          loading: false,
          result: await getListById.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_CITIZEN_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};