import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutAction } from "../actions/teacher-auth-actions";

const Dropdowns = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);
  const typeUser = useSelector((state) => state.authReducer.type);

  const dispatch = useDispatch();

  const logoutTeacher = () => {
    dispatch(signoutAction()).then((res) => {
      navigate("/signinteacher");
    });
  };
  const logoutUser = () => {
    dispatch(signoutAction()).then((res) => {
      navigate("/signin");
    });
  };

  return (
    <div className="btn-group btn-group-top">
      {auth || teacherAuth ? (
        auth && typeUser === "user" ? (
          <a
            href="/signin"
            className="site-btn header-btn"
            onClick={() => logoutUser()}
          >
            logout
          </a>
        ) : (
          <a
            href="/signinteacher"
            className="site-btn header-btn"
            onClick={() => logoutTeacher()}
          >
            logout
          </a>
        )
      ) : (
        <div>
          <button
            type="button"
            className="site-btn header-btn  dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            Login As
          </button>
          <ul style={{ backgroundColor: "#d82a4e" }} className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/signinteacher">
                Teacher
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/signin">
                Student
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdowns;
