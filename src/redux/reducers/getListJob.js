import {
  GET_LIST_JOB
} from "../actions/types";

const initialState = {
  listJobLoading: false,
  listJobResult: false,
  listJobError: false,
};

export const getListJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_JOB':
      console.log(action.payload);
      return {
        ...state,
        listJobLoading: action.payload.loading,
          listJobResult: action.payload.result,
          listJobError: action.payload.error,
      };
    default:
      return state;
  }
};