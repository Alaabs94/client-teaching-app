import {
  creatCourse,
  editCourse,
  deleteCourse,
  getAllCourse,
  failCreateCourse,
  failDeleteCourse,
  failEditCourse,
  failGetAllCourse,
  getCoursesByid,
} from "../constants/course-types";
let course = [];
const courseReducer = (initialState = course, action) => {
  switch (action.type) {
    case editCourse:
    case creatCourse:
    case deleteCourse:
      return { ...action.payload };

    case getAllCourse:
      return { ...course, ...action.payload };
    case getCoursesByid:
      return course;

    case failCreateCourse:
    case failEditCourse:
    case failDeleteCourse:
    case failGetAllCourse:
      return {
        ...action.payload,

        errors: action.payload,
      };
    default:
      return initialState;
  }
};

export default courseReducer;
