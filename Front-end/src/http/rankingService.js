import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/rankings";

async function getRanking() {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data.data || [];
}
async function getSkills() {
  const response = await axios.get(`${API_BASE_URL}/skills`);
  return response.data.data || [];
}
async function getUserRanking(id) {
  const response = await axios.get(`${API_BASE_URL}/user/${id}`);
  return response.data.data || [];
}

export { getRanking, getUserRanking, getSkills };
