/* eslint-disable import/prefer-default-export */
import {
  GET_ADMIN_NOTIFICATION
} from './types';
import notificationAdmin from "../services/notificationAdmin";

export const getNotificationCitizen = () => {
  return async (dispatch) => {
    try {
      const getListData = await notificationAdmin();
      console.log(getListData.data)
      await dispatch({
        type: GET_ADMIN_NOTIFICATION,
        payload: {
          loading: false,
          result: await getListData.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_ADMIN_NOTIFICATION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};