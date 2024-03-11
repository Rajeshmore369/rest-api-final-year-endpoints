import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8800/",
  baseURL: "https://rest-api-final-year-endpoints.onrender.com/",
});

export const createAlert = (formData) => API.post("/alert/", formData);
export const getAlert = (id) => API.get(`/alert/${id}`);
