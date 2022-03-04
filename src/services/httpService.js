import axios from "axios";

function setJwt(jwt) {
  axios.defaults.headers.common["authorization"] = jwt;
  console.log(axios.defaults.headers.common["authorization"]);
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
