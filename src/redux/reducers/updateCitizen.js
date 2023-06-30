/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  UPDATE_PROFILE_CITIZEN
} from '../actions/types';

const initialState = {
  profileLoading: false,
  profileResult: false,
  profileError: false,
};

export const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE_CITIZEN':
      console.log(action.payload);
      return {
        ...state,
        profileLoading: action.payload.loading,
          profileResult: action.payload.result,
          profileError: action.payload.error,
      };
    default:
      return state;
  }
};