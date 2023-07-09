/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  CREATE_CITIZEN_DATA
} from '../actions/types';

const initialState = {
  createCitizenLoading: false,
  createCitizenResult: false,
  createCitizenError: false,
};

export const createCitizenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CITIZEN_DATA':
      console.log(action.payload);
      return {
        ...state,
        createCitizenLoading: action.payload.loading,
          createCitizenResult: action.payload.result,
          createCitizenError: action.payload.error,
      };
    default:
      return state;
  }
};