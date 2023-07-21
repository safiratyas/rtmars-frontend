/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  CREATE_EVENT_DATA
} from '../actions/types';

const initialState = {
  createEventLoading: false,
  createEventResult: false,
  createEventError: false,
};

export const createEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_EVENT_DATA':
      console.log(action.payload);
      return {
        ...state,
        createEventLoading: action.payload.loading,
          createEventResult: action.payload.result,
          createEventError: action.payload.error,
      };
    default:
      return state;
  }
};