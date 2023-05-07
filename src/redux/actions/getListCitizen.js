/* eslint-disable import/prefer-default-export */
import {
  GET_LIST_CITIZEN
} from './types';
import citizen from '../services/getListCitizen';

export const getAllCitizen = () => {
  return async (dispatch) => {
    try {
      const getCitizen = await citizen();
      console.log(getCitizen.data.data.data)
      await dispatch({
        type: GET_LIST_CITIZEN,
        payload: {
          loading: false,
          result: await getCitizen.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_CITIZEN,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};