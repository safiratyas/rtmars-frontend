import {
  GET_LIST_RELIGION
} from "../actions/types";

const initialState = {
  listReligionLoading: false,
  listReligionResult: false,
  listReligionError: false,
};

export const getListReligionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_RELIGION':
      console.log(action.payload);
      return {
        ...state,
        listReligionLoading: action.payload.loading,
          listReligionResult: action.payload.result,
          listReligionError: action.payload.error,
      };
    default:
      return state;
  }
};