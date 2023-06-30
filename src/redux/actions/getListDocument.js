/* eslint-disable import/prefer-default-export */
import {
  GET_LIST_DOCUMENT
} from './types';
import document from '../services/getListDocument';

export const getAllDocument = () => {
  return async (dispatch) => {
    try {
      const getDocument = await document();
      console.log(getDocument.data.data.data)
      await dispatch({
        type: GET_LIST_DOCUMENT,
        payload: {
          loading: false,
          result: await getDocument.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_DOCUMENT,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};