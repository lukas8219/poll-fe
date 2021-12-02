import axios from "axios";

const instanceConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

export default api = axios.create(instanceConfig);

api.interceptors.request.use(
  (config) => {
    console.log(config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
