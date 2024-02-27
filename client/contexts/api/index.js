
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"

const API = axios.create({baseURL:"https://rest-api-final-year-project.onrender.com/"});

API.interceptors.request.use(async (config) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      return Promise.reject(error);
    }
  });


  export const signIn = (formData) => API.post("/user/login", formData);
  export const signUp = (formData) => API.post("/user/signup", formData);
  export const addContacts = (contactsData) => API.post("/contacts/add", contactsData);
  export const fetchContacts = () => API.post("/contacts/");