import {
  GET_LIST_EDUCATION
} from "../actions/types";

const initialState = {
  listEducationLoading: false,
  listEducationResult: false,
  listEducationError: false,
};

export const getListEducationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_EDUCATION':
      console.log(action.payload);
      return {
        ...state,
        listEducationLoading: action.payload.loading,
          listEducationResult: action.payload.result,
          listEducationError: action.payload.error,
      };
    default:
      return state;
  }
};