import {
    CREATE_ALERT,
    GET_ALERT,
  } from "../constants/actionTypes";
  import * as api from "../api/index.js";
  
  export const postAlert = (formData) => async (dispatch) => {
    try {
      const { data } = await api.createAlert(formData);
      dispatch({ type: CREATE_ALERT, data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const fetchAlert = (id) => async (dispatch) => {
    try {
      const { data } = await api.getAlert(id);
      dispatch({ type: GET_ALERT, payload:data });
    } catch (error) {
      console.log(error);
    }
  };
  
