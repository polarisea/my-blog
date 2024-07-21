import axios from "axios";
import { API_HOST } from "../config";
// Create a custom Axios instance
const api = axios.create({
  baseURL: API_HOST + "/api", // Set the base URL for all requests
});

export default api;
