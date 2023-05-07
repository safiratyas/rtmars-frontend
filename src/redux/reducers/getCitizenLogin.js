import { GET_LOGIN_CITIZEN } from "../actions/types";

const initialState = {
  citizenDataLoading: false,
  citizenDataResult: false,
  citizenDataError: false,
};

export const getCitizenLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_CITIZEN':
      console.log(action.payload);
      return {
        ...state,
        citizenDataLoading: action.payload.loading,
        citizenDataResult: action.payload.result,
        citizenDataError: action.payload.error,
      };
    default:
      return state;
  }
};