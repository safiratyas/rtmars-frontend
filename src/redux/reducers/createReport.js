/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  CREATE_REPORT_DATA
} from '../actions/types';

const initialState = {
  createReportLoading: false,
  createReportResult: false,
  createReportError: false,
};

export const createReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_REPORT_DATA':
      console.log(action.payload);
      return {
        ...state,
        createReportLoading: action.payload.loading,
          createReportResult: action.payload.result,
          createReportError: action.payload.error,
      };
    default:
      return state;
  }
};