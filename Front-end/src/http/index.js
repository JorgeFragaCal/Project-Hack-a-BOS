import axios from "axios";
import { login, register } from "./authService";
import { getRanking, getUserRanking, getSkills } from "./rankingService";
import {
  getEvent,
  getEvents,
  createEvent,
  deleteEvent,
  uploadEvent,
  participationEvent,
  puntuateEvent
} from "./eventService";
import { getProfile, uploadAccount } from "./accountService";

const TOKEN_URLS = ["/auth", "/users"];

function isBearerTokenRequired(url) {
  const parsedURL = new URL(url);
  if (TOKEN_URLS.includes(parsedURL.pathname)) {
    return false;
  }
  return true;
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

let token = (currentUser && currentUser.token) || null;

axios.interceptors.request.use(
  function(config) {
    if (token && isBearerTokenRequired(config.url)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    if (response.data.token) {
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      token = response.data.token;
    }
    return response;
  },
  function(error) {
    if (
      error.response.status === 401 &&
      error.config.url.indexOf(TOKEN_URLS) === -1
    ) {
      localStorage.removeItem("currentUser");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export {
  login,
  register,
  getEvent,
  getEvents,
  createEvent,
  deleteEvent,
  uploadEvent,
  getRanking,
  getUserRanking,
  getSkills,
  getProfile,
  uploadAccount,
  participationEvent,
  puntuateEvent
};
