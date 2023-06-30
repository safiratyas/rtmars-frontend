const initialState = {
  documentIDLoading: false,
  documentIDResult: false,
  documentIDError: false,
};

export const getDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DOCUMENT_ID':
      console.log(action.payload);
      return {
        ...state,
        documentIDLoading: action.payload.loading,
          documentIDResult: action.payload.result,
          documentIDError: action.payload.error,
      };
    default:
      return state;
  }
};