import * as api from "../api";
import { SEND_MESSAGES } from "../constants/actionTypes";

export const sendMsg = (body) => async(dispatch) =>{
  try {
    const {data} = await api.sendAlert(body);
    dispatch({type:SEND_MESSAGES,payload:data});
  } catch (error) {
    console.log(error);   
  }
}