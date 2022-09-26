import {
  signinTeacher,
  signupTeacher,
  failSigninTeacher,
  failSignupTeacher,
  signoutTeacher,
  failSignoutTeacher,
  currentTeacher,
  failCurrentTeacher,
  editTeacher,
  failEditTeacher,
} from "../constants/teacher-auth-types";
import teacherServices from "../services/teacher-auth-services";

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await teacherServices.createTeacher(data);
    dispatch({
      type: signupTeacher,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSignupTeacher,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
export const signinActionTeacher = (data) => async (dispatch) => {
  try {
    const res = await teacherServices.identifyTeacher(data);
    dispatch({
      type: signinTeacher,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSigninTeacher,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
export const signoutAction = () => async (dispatch) => {
  try {
    const res = await teacherServices.signout();
    dispatch({
      type: signoutTeacher,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSignoutTeacher,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};

export const getTeacher = () => async (dispatch) => {
  try {
    const res = await teacherServices.getTeacher();
    dispatch({
      type: currentTeacher,
      payload: res.data.currentuser,
    });
    console.log("res.data.currentuser", res.data.currentuser);
    return Promise.resolve(res.data.currentuser);
  } catch (error) {
    dispatch({
      type: failCurrentTeacher,
      payload: error.response.data,
    });
    return Promise.reject(error.response.data);
  }
};

export const editAction = (data) => async (dispatch) => {
  try {
    const res = await teacherServices.editTeacher(data);
    dispatch({
      type: editTeacher,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failEditTeacher,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
