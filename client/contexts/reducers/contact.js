import { ADD_CONTACTS, FETCH_CONTACTS} from "../constants/actionTypes";

export default (contacts = [], action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      return [...contacts, action.payload];
    case FETCH_CONTACTS:
      return action.payload;
    default:
      return contacts;
  }
};
