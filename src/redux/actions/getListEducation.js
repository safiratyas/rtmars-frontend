/* eslint-disable import/prefer-default-export */
import {
  GET_LIST_EDUCATION
} from './types';
import education from '../services/getListEducation';

export const getListEducation = () => {
  return async (dispatch) => {
    try {
      const getEducation = await education();
      console.log(getEducation.data)
      await dispatch({
        type: GET_LIST_EDUCATION,
        payload: {
          loading: false,
          result: await getEducation.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_EDUCATION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};