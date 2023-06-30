import {
  GET_LIST_DOCUMENT
} from "../actions/types";

const initialState = {
  listDocLoading: false,
  listDocResult: false,
  listDocError: false,
};

export const getListDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_DOCUMENT':
      console.log(action.payload);
      return {
        ...state,
        listDocLoading: action.payload.loading,
          listDocResult: action.payload.result,
          listDocError: action.payload.error,
      };
    default:
      return state;
  }
};