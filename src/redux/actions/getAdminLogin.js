/* eslint-disable import/prefer-default-export */
import {
  GET_LOGIN_ADMIN
} from './types';
import citizen from '../services/getAdminLogin';

export const getAdminLogin = () => {
  return async (dispatch) => {
    try {
      const getWhosLogin = await citizen();
      console.log(getWhosLogin.data)
      await dispatch({
        type: GET_LOGIN_ADMIN,
        payload: {
          loading: false,
          result: await getWhosLogin.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LOGIN_ADMIN,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};