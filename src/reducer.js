import authReducer from "./reducers/auth-reducer";
import authTeacherReducer from "./reducers/teacher-auth-reducer";
import courseReducer from "./reducers/course-reducer";
import subscriptionReducer from "./reducers/subscription";
import { combineReducers } from "redux";

export default combineReducers({
  authReducer,
  authTeacherReducer,
  courseReducer,
  subscriptionReducer,
});
