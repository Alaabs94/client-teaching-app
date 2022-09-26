import {
  signinUser,
  signupUser,
  failSigninUser,
  failSignupUser,
  signoutUser,
  failSignoutUser,
  currentUser,
  failCurrentUser,
  editUser,
  failEditUser,
} from "../constants/auth-types";
import authServices from "../services/auth-services";

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await authServices.createUser(data);

    dispatch({
      type: signupUser,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSignupUser,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
export const signinAction = (data) => async (dispatch) => {
  try {
    const res = await authServices.identifyUser(data);
    dispatch({
      type: signinUser,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSigninUser,
      payload: error.response.data,
    });
    return Promise.reject(error.response.data);
  }
};
export const signoutAction = () => async (dispatch) => {
  try {
    const res = await authServices.signout();
    dispatch({
      type: signoutUser,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failSignoutUser,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const res = await authServices.getUser();
    dispatch({
      type: currentUser,
      payload: res.data.currentuser,
    });
    return Promise.resolve(res.data.currentuser);
  } catch (error) {
    dispatch({
      type: failCurrentUser,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};

export const editAction = (data) => async (dispatch) => {
  try {
    const res = await authServices.editUser(data);
    dispatch({
      type: editUser,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failEditUser,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
