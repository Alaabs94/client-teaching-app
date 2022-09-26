import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Protected = ({ children }) => {
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);
  useEffect(() => {
    console.log("Auth", auth);
    console.log("teacherAuth", teacherAuth);
    console.log("hiiiiiiiiiiiiiiiiiiiiii");
  }, []);
  if (auth === false || teacherAuth === false) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default Protected;
