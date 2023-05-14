import {
  GET_LIST_ADMIN
} from "../actions/types";

const initialState = {
  listAdminDataLoading: false,
  listAdminDataResult: false,
  listAdminDataError: false,
};

export const getListAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_ADMIN':
      console.log(action.payload);
      return {
        ...state,
        listAdminDataLoading: action.payload.loading,
          listAdminDataResult: action.payload.result,
          listAdminDataError: action.payload.error,
      };
    default:
      return state;
  }
};