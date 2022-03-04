import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;

http.setJwt(localStorage.getItem("token"));

export const createAlert = async (payload) => {
  const { data } = await http.post(apiUrl + "/alert", payload);
  return data;
};
export const getAllAlert = async (payload) => {
  const { data } = await http.get(apiUrl + "/alert", payload);
  console.log(data);
  return data;
};
export const updateAlert = async (payload) => {
  const { data } = await http.put(apiUrl + "/alert", payload);
  console.log(data);
  return data;
};
export const deleteAlert = async (payload) => {
  console.log(payload);
  const { data } = await http.delete(apiUrl + "/alert", { data: payload });
  console.log(data);
  return data;
};

export default {
  createAlert,
  getAllAlert,
  updateAlert,
  deleteAlert,
};
