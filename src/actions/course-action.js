import {
  creatCourse,
  editCourse,
  deleteCourse,
  getAllCourse,
  failCreateCourse,
  failDeleteCourse,
  failEditCourse,
  failGetAllCourse,
} from "../constants/course-types";
import courseService from "../services/course-services";

export const createAction = (data) => async (dispatch) => {
  try {
    const res = await courseService.creatCourse(data);

    dispatch({
      type: creatCourse,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failCreateCourse,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};

export const editAction = (data) => async (dispatch) => {
  try {
    const res = await courseService.editCourse(data);

    dispatch({
      type: editCourse,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failEditCourse,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};

export const deleteAction = () => async (dispatch) => {
  try {
    const res = await courseService.deleteCourse();

    dispatch({
      type: deleteCourse,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failDeleteCourse,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};

export const showAction = () => async (dispatch) => {
  try {
    const res = await courseService.getAllCourse();

    dispatch({
      type: getAllCourse,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: failGetAllCourse,
      payload: error.response.data,
    });
    return Promise.reject(error);
  }
};
