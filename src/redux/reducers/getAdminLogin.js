import {
  GET_LOGIN_ADMIN
} from "../actions/types";

const initialState = {
  adminDataLoading: false,
  adminDataResult: false,
  adminDataError: false,
};

export const getAdminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_ADMIN':
      console.log(action.payload);
      return {
        ...state,
        adminDataLoading: action.payload.loading,
          adminDataResult: action.payload.result,
          adminDataError: action.payload.error,
      };
    default:
      return state;
  }
};