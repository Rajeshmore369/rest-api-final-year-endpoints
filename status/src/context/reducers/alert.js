import { CREATE_ALERT, GET_ALERT } from "../constants/actionTypes";

export default (alerts = [], action) => {
  switch (action.type) {
    case CREATE_ALERT:
      return [...alerts, action.payload];
    case GET_ALERT:
      return [action.payload];
    default:
      return alerts;
  }
};
