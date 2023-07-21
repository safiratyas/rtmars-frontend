/* eslint-disable import/prefer-default-export */
import {
  GET_CITIZEN_NOTIFICATION
} from './types';
import notification from '../services/notificationCitizen';

export const getNotificationCitizen = () => {
  return async (dispatch) => {
    try {
      const getListData = await notification();
      console.log(getListData.data.data.data)
      await dispatch({
        type: GET_CITIZEN_NOTIFICATION,
        payload: {
          loading: false,
          result: await getListData.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_CITIZEN_NOTIFICATION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};