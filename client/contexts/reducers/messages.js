import { SEND_MESSAGES} from "../constants/actionTypes";

export default (messages = [], action) => {
  switch (action.type) {
    case SEND_MESSAGES:
      return [...messages, action.payload];
    default:
      return messages;
  }
};
