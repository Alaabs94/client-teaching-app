import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PersonalCourse = ({ course, teacherAuth, auth, userInfo }) => {
  const [personalCourse, setPersonalCourse] = useState([]);
  useEffect(() => {
    getCourse();
    // eslint-disable-next-line
  }, []);
  const getCourse = () => {
    const userfilter = course.filter((user) => {
      return user.users.includes(userInfo.id);
    });

    setPersonalCourse(userfilter);
  };
  return (
    // <!-- categories section -->
    <section className="categories-section spad">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "white" }}>your courses</h2>
        </div>
        <div className="row">
          {/* <!-- categorie --> */}
          {personalCourse.map((el) => (
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
export default PersonalCourse;
