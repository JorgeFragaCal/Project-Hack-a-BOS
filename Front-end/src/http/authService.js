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
  image,
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
    image: image ? image : "null",
    name: name ? name : "null",
    lastName: lastName ? lastName : "null",
    phone: phone ? phone : "null",
    address: address ? address : "null",
    city: city ? city : "null",
    country: country ? country : "null"
  });
}