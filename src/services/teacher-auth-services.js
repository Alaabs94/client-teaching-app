import axios from "axios";
const url = "http://localhost:5000";
axios.defaults.withCredentials = true;
const createTeacher = (data) => {
  return axios.post(`${url}/api/teacher/signup`, data);
};
const identifyTeacher = (data) => {
  return axios.post(`${url}/api/teacher/signin`, data);
};

const getTeacher = () => {
  return axios.get(`${url}/api/teacher/currentuser`);
};
const signout = () => {
  return axios.get(`${url}/api/teacher/signout`);
};

const editTeacher = (data) => {
  return axios.put(`${url}/api/teacher/editteacher`, data);
};
const teacherServices = {
  createTeacher,
  identifyTeacher,
  getTeacher,
  signout,
  editTeacher,
};
export default teacherServices;
