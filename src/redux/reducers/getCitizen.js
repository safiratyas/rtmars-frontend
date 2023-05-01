const initialState = {
  citizenIDLoading: false,
  citizenIDResult: false,
  citizenIDError: false,
};

export const getCitizenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_CITIZEN':
      console.log(action.payload);
      return {
        ...state,
          citizenIDLoading: action.payload.loading,
          citizenIDResult: action.payload.result,
          citizenIDError: action.payload.error,
      };
    default:
      return state;
  }
};