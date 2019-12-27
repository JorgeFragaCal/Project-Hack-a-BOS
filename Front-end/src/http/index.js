import axios from "axios";
import { login, register } from "./authService";
import { getEvents } from "./get-events";
import { getRanking } from "./get-ranking";

const TOKEN_URLS = ["/auth", "/users"];

// Al iniciar este módulo recuperamos el usuario guardado del localStorage;
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Iniciamos la variable token con lo almacenado en el localStorage
// Si no tenia nada la inicio a null
let token = (currentUser && currentUser.token) || null;

// Definimos interceptors
axios.interceptors.request.use(
  function(config) {
    if (token && TOKEN_URLS.indexOf(config.url) === -1) {
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

export { login, register, getEvents, getRanking };
