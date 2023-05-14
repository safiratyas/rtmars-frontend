/* eslint-disable import/prefer-default-export */
import {
  GET_LIST_JOB
} from './types';
import job from '../services/getListJob';

export const getListJob = () => {
  return async (dispatch) => {
    try {
      const getJob = await job();
      console.log(getJob.data)
      await dispatch({
        type: GET_LIST_JOB,
        payload: {
          loading: false,
          result: await getJob.data.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_JOB,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};