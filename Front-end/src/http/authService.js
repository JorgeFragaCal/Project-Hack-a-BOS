import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export function login(email, password) {
  return axios.post(`${BASE_URL}/auth`, {
    email,
    password
  });
}

export function register({
  username,
  name,
  lastName,
  email,
  phone,
  password,
  avatar,
  address,
  city,
  country,
  userType,
  id
}) {
  return axios.post(`${BASE_URL}/account`, {
    id,
    username,
    email,
    password,
    userType,
    phone,
    avatar,
    name,
    lastName,
    address,
    city,
    country
  });
}
