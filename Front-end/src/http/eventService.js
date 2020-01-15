import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

async function getEvent(id) {
  const response = await axios.get(`${API_BASE_URL}/events/event/${id}`);
  return response.data.data || [];
}

async function getEvents() {
  const response = await axios.get(`${API_BASE_URL}/events`);
  return response.data.data || [];
}

async function getUserOrganizateEvents(id) {
  const response = await axios.get(`${API_BASE_URL}/events/my-events/${id}`);
  return response.data.data || [];
}

async function filterEvents(city, skill, date_init, date_final) {
  const response = await axios.get(
    `${API_BASE_URL}/events/filter/?city=${city}&skill=${skill}`
  );
  return response.data.data || [];
}

export function createEvent({
  title,
  start_date,
  email,
  address,
  city,
  country,
  description,
  image,

  prize,
  web
}) {
  return axios.post(`${API_BASE_URL}/events/new`, {
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

export function uploadEvent({
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

export function deleteEvent(id) {
  return axios.delete(`${API_BASE_URL}/events/event/${id}`);
}

export function participationEvent(id) {
  return axios.post(`${API_BASE_URL}/events/event/${id}`);
}

export { getEvent, getEvents, filterEvents, getUserOrganizateEvents };
