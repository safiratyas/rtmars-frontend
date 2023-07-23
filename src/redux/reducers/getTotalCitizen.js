import {
  GET_TOTAL_CITIZEN
} from "../actions/types";

const initialState = {
  totalCitizenLoading: false,
  totalCitizenResult: false,
  totalCitizenError: false,
};

export const getTotalCitizenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOTAL_CITIZEN':
      console.log(action.payload);
      return {
        ...state,
          totalCitizenLoading: action.payload.loading,
          totalCitizenResult: action.payload.result,
          totalCitizenError: action.payload.error,
      };
    default:
      return state;
  }
};