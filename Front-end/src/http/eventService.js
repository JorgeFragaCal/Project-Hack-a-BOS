import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

async function getEvent(id) {
  const response = await axios.get(`${API_BASE_URL}/events/event/${id}`);
  return response.data.data || [];
}

async function getEvents(skill, city, date_init, date_final) {
  const response = await axios.get(`${API_BASE_URL}/events`);
  return response.data.data || [];
}
async function filterEvents(skill, city, date_init, date_final) {
  const response = await axios.get(
    `${API_BASE_URL}/events/filter/?city=${city}&skill=${skill}&date_init=${date_init}&date_finanl=${date_final}`
  );
  return response.data.data || [];
}

async function createEvent({
  title,
  start_date,
  address,
  city,
  country,
  description,
  image,
  email,
  prize,
  web
}) {
  return axios.post(`${API_BASE_URL}/events`, {
    title,
    start_date,
    email,
    address: address ? address : "null",
    city: city ? city : "null",
    country: country ? country : "null",
    description: description ? description : "null",
    image: image ? image : "https://via.placeholder.com/300",
    prize: prize ? prize : "free",
    web: web ? web : "null"
  });
}

async function uploadEvent({
  title,
  start_date,
  address,
  city,
  country,
  description,
  image,
  email,
  prize,
  web
}) {
  return axios.put(`${API_BASE_URL}/events`, {
    title,
    start_date,
    address: address ? address : "null",
    city: city ? city : "null",
    country: country ? country : "null",
    description: description ? description : "null",
    image: image ? image : "https://via.placeholder.com/300",
    email,
    prize: prize ? prize : "free",
    web: web ? web : "null"
  });
}

async function deleteEvent(id) {
  return axios.delete(`${API_BASE_URL}/events/${id}`);
}

export {
  getEvent,
  getEvents,
  createEvent,
  deleteEvent,
  uploadEvent,
  filterEvents
};
