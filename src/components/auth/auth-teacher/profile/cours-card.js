import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { showAction } from "../../../../actions/course-action";
import { useDispatch, useSelector } from "react-redux";
const CourseCard = () => {
  const [course, setCourse] = useState([]);
  const teacherId = useSelector((state) => state.authTeacherReducer);
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);
  const userInfo = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log(teacherId.id);
  useEffect(() => {
    // eslint-disable-next-line
    getAllCoursesById();
  }, []);
  const getAllCoursesById = () => {
    dispatch(showAction()).then((data) => {
      setCourse(data);
    });
  };
  return (
    // <!-- categories section -->
    <section className="categories-section spad">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "white" }}>Our Course Categories</h2>
        </div>
        <div className="row">
          {/* <!-- categorie --> */}
          {course
            .filter((category) => category.teacher.id === teacherId.id)
            .map((el) => (
              <Link
                to={`/card/${el.id}`}
                state={{
                  el,
                  auth: auth,
                  teacherAuth: teacherAuth,
                  userInfo: userInfo,
                }}
                // className="mix col-lg-3 col-md-4 col-sm-6 finance"
                className="col-lg-4 col-md-6"
                key={el.id}
              >
                {/* <div className="col-lg-4 col-md-6"> */}
                <div className="categorie-item">
                  <div
                    className="ci-thumb set-bg"
                    style={{ backgroundImage: `url(${el.picture})` }}
                  ></div>
                  <div className="ci-text">
                    <h5>{el.name.split(" ").slice(0, 1).join(" ")}...</h5>
                    <p>{el.description.split(" ").slice(0, 5).join(" ")}...</p>
                    <span>{el.teacher.firstname}</span>
                  </div>
                </div>
                {/* </div> */}
              </Link>
            ))}
        </div>
      </div>
    </section>
    // <!-- categories section end -->
  );
};
export default CourseCard;
