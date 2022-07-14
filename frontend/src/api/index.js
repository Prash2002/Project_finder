import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: false,
});

export const addProject = (payload) => api.post(`/addproject`, payload);
export const getAllProjects = () => api.get(`/projects`);

export const updateProjectById = (id, payload) =>
  api.put(`/project/${id}`, payload);
export const deleteProjectById = (id) => api.delete(`/project/${id}`);
export const getProjectById = (id) => api.get(`/project/${id}`);

const apis = {
  addProject,
  getAllProjects,
  updateProjectById,
  deleteProjectById,
  getProjectById,
};

export default apis;
