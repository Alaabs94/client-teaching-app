import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutAction } from "../../actions/teacher-auth-actions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);
  const typeUser = useSelector((state) => state.authReducer.type);
  const typeTeacher = useSelector((state) => state.authTeacherReducer.type);
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
    <section className="banner-section spad">
      {/* banner section */}
      <div className="container">
        <div className="section-title mb-0 pb-2">
          <h2>Join Our Community Now!</h2>
          <p>
            Upskill yourself and build a culture of learning. Executive
            Education courses from top universities offer the skills you need to
            pivot and expand your career.
          </p>
        </div>

        <div className="text-center pt-5">
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
            <div className="text-center pt-5">
              <button
                type="button"
                className="site-btn site-btn-register"
                data-bs-toggle="dropdown"
                aria-expanded="flse"
              >
                {" "}
                Register As
              </button>
              <ul
                style={{ backgroundColor: "#d82a4e" }}
                className="dropdown-menu"
              >
                <li>
                  <a className="dropdown-item" href="/signupteacher">
                    Teacher
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/signup">
                    Student
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* banner section end */}
    </section>
  );
};
export default Register;
