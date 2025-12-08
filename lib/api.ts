import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api", // cámbialo cuando uses tu dominio
});


api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
