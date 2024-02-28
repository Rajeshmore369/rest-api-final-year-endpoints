import { ADD_CONTACTS, DELETE_CONTACT, FETCH_CONTACTS} from "../constants/actionTypes";

export default (contacts = [], action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      return [...contacts, action.payload];
    case FETCH_CONTACTS:
      return action.payload;
      case DELETE_CONTACT:
        return contacts.filter((contact) => contact._id !== action.payload._id);
    default:
      return contacts;
  }
};
