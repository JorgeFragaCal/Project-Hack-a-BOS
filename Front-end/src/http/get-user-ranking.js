import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/rankings/user";

async function getUserRanking(id) {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data.data || [];
}
export { getUserRanking };
