import axios from "axios";
const url = "https://e-teaching-app.herokuapp.com";
axios.defaults.withCredentials = true;
const creatCourse = (data) => {
  return axios.post(`${url}/api/course/create`, data);
};
const editCourse = (data) => {
  return axios.put(`${url}/api/course/edit`, data);
};
const getAllCourse = (data) => {
  return axios.get(`${url}/api/course/show`, data);
};
const deleteCourse = (data) => {
  return axios.delete(`${url}/api/course/delete`, data);
};
const courseService = { creatCourse, editCourse, getAllCourse, deleteCourse };
export default courseService;
