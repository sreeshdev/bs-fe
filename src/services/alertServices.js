import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;

http.setJwt(localStorage.getItem("token"));

export const createAlert = async (payload) => {
  try {
    const { data } = await http.post(apiUrl + "/alert", payload);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};
export const getAllAlert = async (payload) => {
  try {
    const { data } = await http.get(apiUrl + "/alert", payload);

    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};
export const updateAlert = async (payload) => {
  try {
    const { data } = await http.put(apiUrl + "/alert", payload);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};
export const deleteAlert = async (payload) => {
  try {
    const { data } = await http.delete(apiUrl + "/alert", { data: payload });

    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default {
  createAlert,
  getAllAlert,
  updateAlert,
  deleteAlert,
};
