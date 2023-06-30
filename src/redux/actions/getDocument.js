/* eslint-disable import/prefer-default-export */
import {
  GET_DOCUMENT_ID
} from './types';
import document from '../services/getDocument';

export const getDocumentID = (id) => {
  return async (dispatch) => {
    try {
      const getListById = await document(id);
      console.log(getListById)
      await dispatch({
        type: GET_DOCUMENT_ID,
        payload: {
          loading: false,
          result: await getListById,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_DOCUMENT_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};