import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
export function login(email, password) {
  return axios.post(`${BASE_URL}/auth`, null, {
    auth: {
      username: email,
      password
    }
  });
}

export function register({ name, email, password }) {
  return axios.post(`${BASE_URL}/account`, {
    name,
    email,
    password
  });
}
