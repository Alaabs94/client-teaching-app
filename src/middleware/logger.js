// import { getTeacher } from "../actions/teacher-auth-actions";
// import { getUser } from "../actions/auth-action";
// import { signinTeacher, signupTeacher } from "../constants/teacher-auth-types";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
const getCurrentUser = (store) => (next) => (action) => {
  // store
  //   .dispatch(getTeacher())
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // next(action);
};
export { logger, getCurrentUser };
