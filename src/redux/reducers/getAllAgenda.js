import {
  GET_ALL_AGENDA
} from "../actions/types";

const initialState = {
  listAgendaLoading: false,
  listAgendaResult: false,
  listAgendaError: false,
};

export const getListAgendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_AGENDA':
      console.log(action.payload);
      return {
        ...state,
        listAgendaLoading: action.payload.loading,
          listAgendaResult: action.payload.result,
          listAgendaError: action.payload.error,
      };
    default:
      return state;
  }
};