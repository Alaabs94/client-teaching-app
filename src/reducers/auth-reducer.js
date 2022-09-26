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

const authReducer = (initialState = {}, action) => {
  switch (action.type) {
    case signinUser:
    case signupUser:
    case editUser:
      return { ...action.payload, auth: true, type: "user" };
    case currentUser:
      return action.payload
        ? { ...action.payload, auth: true, type: "user" }
        : { ...action.payload };
    case failSigninUser:
    case failSignupUser:
    case failSignoutUser:
    case failCurrentUser:
    case failEditUser:
      return {
        ...action.payload,
        auth: false,
        errors: action.payload,
      };
    case signoutUser:
      return { auth: false, ...action.payload };

    default:
      return initialState;
  }
};
export default authReducer;
