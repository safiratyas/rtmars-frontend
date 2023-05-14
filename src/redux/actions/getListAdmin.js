/* eslint-disable import/prefer-default-export */
import {
  GET_LIST_ADMIN
} from './types';
import admin from '../services/getListAdmin';

export const getListAdmin = () => {
  return async (dispatch) => {
    try {
      const getListData = await admin();
      console.log(getListData.data.data.data)
      await dispatch({
        type: GET_LIST_ADMIN,
        payload: {
          loading: false,
          result: await getListData.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_ADMIN,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};