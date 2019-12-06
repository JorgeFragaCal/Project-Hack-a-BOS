import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/events";

async function getEvents(city) {
  const response = await axios.get(`${API_BASE_URL}?city=${city}`);
  return response.data.data || [];
}
export { getEvents };
