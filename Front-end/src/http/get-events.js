import axios from "axios";

const API_BASE_URL = "http://localhost:3000/";

async function getEvents(city, skill) {
  const response = await axios.get(
    `${API_BASE_URL}?city=${city}&skill=${skill}`
  );
  return response.data.Search || [];
}
export { getEvents };
