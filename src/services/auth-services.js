import axios from "axios";
const url = "https://e-teaching-app.herokuapp.com";
axios.defaults.withCredentials = true;
const createUser = (data) => {
  return axios.post(`${url}/api/student/signup`, data);
};
const identifyUser = (data) => {
  return axios.post(`${url}/api/student/signin`, data);
};

const getUser = () => {
  return axios.get(`${url}/api/student/currentuser`);
};
const signout = () => {
  return axios.get(`${url}/api/student/signout`);
};

const editUser = (data) => {
  return axios.put(`${url}/api/student/edituser`, data);
};
const authServices = { createUser, identifyUser, getUser, signout, editUser };
export default authServices;
