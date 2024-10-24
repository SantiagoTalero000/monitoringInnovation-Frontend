import axios from "axios";

const monitoringUrl = axios.create({
  baseURL: "https://monitoringinnovation-backend.onrender.com/api/monitoring/",
});

export const getAllData = () => monitoringUrl.get("");

export const createData = (data) => monitoringUrl.post("/", data);

export const updateData = (id, data) => monitoringUrl.put(`/${id}/`, data);

export const deleteData = (id) => monitoringUrl.delete(`/${id}/`);
