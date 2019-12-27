import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/events";

async function getEvents(city, skill, id) {
  const response = await axios.get(
    `${API_BASE_URL}?city=${city}&skill=${skill}&id=${id}`
  );
  return response.data.data || [];
}
export { getEvents };
