import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;

export const login = async (payload) => {
  const { data } = await http.post(apiUrl + "/user/signin", payload);
  localStorage.setItem("token", data.token);
  return data;
};
export const signup = async (payload) => {
  const { data } = await http.post(apiUrl + "/user/signup", payload);
  console.log(data);
  localStorage.setItem("token", data.token);
  return data;
};

export function logout() {
  localStorage.removeItem("token");
}

export default {
  login,
  signup,
  logout,
};
