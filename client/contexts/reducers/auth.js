import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      try {
        AsyncStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      } catch (error) {
        console.error('AsyncStorage Error:', error);
      }

      return { ...state, authData: action.data, loading: false, errors: null };
      case actionType.UPDATE_DETAILS:
        try {
          AsyncStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        } catch (error) {
          console.error('AsyncStorage Error:', error);
        }
  
        return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      try {
        AsyncStorage.clear();
      } catch (error) {
        console.error('AsyncStorage Error:', error);
      }

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
