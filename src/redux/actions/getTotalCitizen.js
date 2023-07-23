/* eslint-disable import/prefer-default-export */
import {
  GET_TOTAL_CITIZEN
} from './types';
import citizen from '../services/getTotalCitizen';

export const getTotalCitizen = () => {
  return async (dispatch) => {
    try {
      const getCitizen = await citizen();

      await dispatch({
        type: GET_TOTAL_CITIZEN,
        payload: {
          loading: false,
          result: await getCitizen.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_TOTAL_CITIZEN,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};