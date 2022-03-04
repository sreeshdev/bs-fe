import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;

export const login = async (payload) => {
  try {
    const { data } = await http.post(apiUrl + "/user/signin", payload);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};
export const signup = async (payload) => {
  try {
    const { data } = await http.post(apiUrl + "/user/signup", payload);
    console.log(data);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export function logout() {
  localStorage.removeItem("token");
}

export default {
  login,
  signup,
  logout,
};
