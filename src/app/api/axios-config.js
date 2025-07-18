import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  //   timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("authToken");
      window.location.href = "/";
    }
    if (error.response && error.response.status === 400) {
      sessionStorage.removeItem("authToken");
    } else if (error.response.status === 404 || error.response.status === 500) {
      window.location.href = "/server-error";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
