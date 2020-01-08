import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

async function getEvent(id) {
  const response = await axios.get(`${API_BASE_URL}/events/event/${id}`);
  return response.data.data || [];
}

async function getEvents(city, skill, id) {
  const response = await axios.get(
    `${API_BASE_URL}/events?city=${city}&skill=${skill}&id=${id}`
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

async function deleteEvent(event_id) {
  return axios.delete(`${API_BASE_URL}/events/${event_id}`);
}

export { getEvent, getEvents, createEvent, deleteEvent, uploadEvent };
