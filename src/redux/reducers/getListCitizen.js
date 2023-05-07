import {
  GET_LIST_CITIZEN
} from "../actions/types";

const initialState = {
  listCitizenLoading: false,
  listCitizenResult: false,
  listCitizenError: false,
};

export const getListCitizenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_CITIZEN':
      console.log(action.payload);
      return {
        ...state,
          listCitizenLoading: action.payload.loading,
          listCitizenResult: action.payload.result,
          listCitizenError: action.payload.error,
      };
    default:
      return state;
  }
};