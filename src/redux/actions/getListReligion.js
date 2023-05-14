/* eslint-disable import/prefer-default-export */
import {
  GET_LIST_RELIGION
} from './types';
import religion from '../services/getListReligion';

export const getListReligion = () => {
  return async (dispatch) => {
    try {
      const getReligion = await religion();
      console.log(getReligion.data)
      await dispatch({
        type: GET_LIST_RELIGION,
        payload: {
          loading: false,
          result: await getReligion.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_RELIGION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};