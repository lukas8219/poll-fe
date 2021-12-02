import axios from "axios";

const instanceConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(instanceConfig);
export default api;
