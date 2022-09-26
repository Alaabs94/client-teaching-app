import EditTeacher from "./edit-teacher";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddCourse from "./add-course";
import CourseCard from "./cours-card";
import { signoutAction } from "../../../../actions/teacher-auth-actions";
import teacherServices from "../../../../services/teacher-auth-services";
const ProfileTeacher = () => {
  const [show, setShow] = useState("ALL_COURSES");
  const currentTeacher = useSelector((state) => state.authTeacherReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(signoutAction()).then((res) => {
      navigate("/");
    });
  };

  const changeView = (view) => {
    setShow(view);
  };

  return (
    <section style={{ backgroundColor: "#3e3e3e" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav className="main-menu">
              <ul className="buttons_navigation">
                <a href="#" onClick={() => logout()} className="site-btn">
                  Log out
                </a>

                <a href="/" className="site-btn">
                  Home
                </a>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={currentTeacher.picture}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />

                <h5 className="my-3">
                  {currentTeacher.firstname + " " + currentTeacher.lastname}
                </h5>
                <p className="text-muted mb-1">Teacher</p>
                <p className="text-muted mb-4">{currentTeacher.description}</p>
                <div className="d-flex justify-content-center mb-2">
                  <a
                    href="#"
                    className="site-btn header-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit
                  </a>
                  <EditTeacher />
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li
                    onClick={() => changeView("INFORMATION")}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                  >
                    <i
                      className="fa fa-user fa-lg"
                      style={{ color: "#333333" }}
                    ></i>
                    <p className="mb-0">Information</p>
                  </li>
                  <li
                    onClick={() => changeView("ADD_COURSE")}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                  >
                    <i className="fa fa-plus-square fa-lg text-warning"></i>
                    <p className="mb-0">Add course</p>
                  </li>
                  <li
                    onClick={() => changeView("ALL_COURSES")}
                    className="list-group-item d-flex justify-content-between align-items-center p-3"
                  >
                    <i
                      className="fa fa-book fa-lg"
                      style={{ color: "#333333" }}
                    ></i>
                    <p className="mb-0">ALL your courses</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {show === "INFORMATION" && (
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {currentTeacher.firstname +
                          " " +
                          currentTeacher.lastname}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentTeacher.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {show === "ADD_COURSE" && (
            <div className="col-lg-8">
              <AddCourse />
            </div>
          )}
          {show === "ALL_COURSES" && (
            <div className="col-lg-8">
              <CourseCard />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default ProfileTeacher;
