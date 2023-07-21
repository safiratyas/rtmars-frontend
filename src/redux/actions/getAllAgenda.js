/* eslint-disable import/prefer-default-export */
import {
  GET_ALL_AGENDA
} from './types';
import agenda from '../services/getAllAgenda';

export const getAllAgenda = () => {
  return async (dispatch) => {
    try {
      const getAgenda = await agenda();
      console.log(getAgenda.data.data.data)
      await dispatch({
        type: GET_ALL_AGENDA,
        payload: {
          loading: false,
          result: await getAgenda.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_AGENDA,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};