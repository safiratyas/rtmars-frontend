import {
  GET_CITIZEN_NOTIFICATION
} from "../actions/types";

const initialState = {
 listCitizenNotificationLoading: false,
 listCitizenNotificationResult: false,
 listCitizenNotificationError: false,
};

export const getListCitizenNotification = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIZEN_NOTIFICATION':
      console.log(action.payload);
      return {
        ...state,
       listCitizenNotificationLoading: action.payload.loading,
         listCitizenNotificationResult: action.payload.result,
         listCitizenNotificationError: action.payload.error,
      };
    default:
      return state;
  }
};