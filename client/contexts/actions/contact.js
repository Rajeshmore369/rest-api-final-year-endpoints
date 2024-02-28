import * as api from "../api";
import { ADD_CONTACTS, DELETE_CONTACT, FETCH_CONTACTS } from "../constants/actionTypes";

export const addContacts = (contact) => async(dispatch) =>{
  try {
    const {data} = await api.addContacts(contact);
    dispatch({type:ADD_CONTACTS,payload:data});
  } catch (error) {
    console.log(error);   
  }
}

export const getContacts = () => async(dispatch) =>{
  try {
    const { data } = await api.fetchContacts();
    dispatch({ type: FETCH_CONTACTS, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deleteContact = (id) => async(dispatch) =>{
  try {
    const { data } = await api.deleteContact(id);
    dispatch({ type: DELETE_CONTACT, payload: data });
  } catch (error) {
    console.log(error);
  }
}
