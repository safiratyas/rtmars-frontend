import {
  GET_ADMIN_NOTIFICATION
} from "../actions/types";

const initialState = {
  listAdminNotificationLoading: false,
  listAdminNotificationResult: false,
  listAdminNotificationError: false,
};

export const getListAdminNotification = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADMIN_NOTIFICATION':
      console.log(action.payload);
      return {
        ...state,
        listAdminNotificationLoading: action.payload.loading,
          listAdminNotificationResult: action.payload.result,
          listAdminNotificationError: action.payload.error,
      };
    default:
      return state;
  }
};