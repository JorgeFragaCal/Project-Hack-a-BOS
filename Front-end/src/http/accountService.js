import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/user";

async function getProfile(id) {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data.data || [];
}
export { getProfile };

export function uploadAccount({
  username,
  name,
  lastName,
  email,
  phone,
  address,
  city,
  country,
  anonymous
}) {
  return axios.put(`${API_BASE_URL}`, {
    username: username ? username : " ",
    name: name ? name : " ",
    lastName: lastName ? lastName : " ",
    email: email ? email : "",
    phone: phone ? phone : "",
    address: address ? address : " ",
    city: city ? city : " ",
    country: country ? country : " ",
    anonymous: anonymous ? anonymous : " "
  });
}
export function uploadAvatar(file) {
  const formData = new FormData();
  formData.append("avatar", file);
  return axios.post(`${API_BASE_URL}/avatar`, formData, {
    headers: {
      "content-type": "multipart/form-data"
    }
  });
}
async function getPuntuation(id) {
  const response = await axios.get(`${API_BASE_URL}/puntuation/${id}`);
  return response.data.data || [];
}
export { getPuntuation };
