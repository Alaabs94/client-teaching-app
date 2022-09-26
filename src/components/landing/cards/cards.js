import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const Cards = ({ courses, updateCourse }) => {
  const [searchCourses, setSearch] = useState([]);
  const [field, setField] = useState([]);
  const [newField, setNewField] = useState([]);

  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);
  const userInfo = useSelector((state) => state.authReducer);

  useEffect(() => {
    setSearch(courses);
    setNewField(courses);
    setField(removeDuplicates(courses));
  }, [updateCourse]);

  const onReloadState = (e) => {
    setNewField(courses);
  };

  const onSearchByClick = (e, f) => {
    e.preventDefault();

    const findCommons = searchCourses.filter((c) =>
      c.field.toLowerCase().includes(f.toLowerCase())
    );
    setNewField(findCommons);
  };
  const removeDuplicates = (f) => {
    const filder = [];
    f.map((c) =>
      filder.push(c.field.charAt(0).toUpperCase() + c.field.slice(1))
    );
    return [...new Set(filder)];
  };

  const groupCard = (f, el) => {
    return (
      <Link
        to={`${f}`}
        state={{ el, auth: auth, teacherAuth: teacherAuth, userInfo: userInfo }}
        className="mix col-lg-3 col-md-4 col-sm-6 finance"
        key={el.id}
      >
        <div
          className="course-item"
          style={{ backgroundImage: `url(${el.picture})` }}
        >
          <div className="course-thumb set-bg">
            {teacherAuth ? (
              <div className="price">you should be a student to subscribe</div>
            ) : (
              <div className="price">Subscribe</div>
            )}
          </div>
          <div className="course-info">
            <div className="course-text">
              <h5>{el.name}</h5>
              <p>{el.description.split(" ").slice(0, 3).join(" ")}...</p>
              <div className="students">students: {el.users.length}</div>
            </div>
            <div className="course-author">
              <div
                className="ca-pic set-bg"
                style={{ backgroundImage: `url(${el.picture})` }}
              ></div>
              <p>
                {el.teacher.firstname + " " + el.teacher.lastname},{" "}
                <span>{el.field}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <section className="course-section spad pb-0">
      {/* course section */}
      <div className="course-warp">
        <ul className="course-filter controls">
          <li
            onClick={(e) => onReloadState(e)}
            className="control active"
            data-filter="all"
          >
            All
          </li>
          {field.map((el) => (
            <li
              onClick={(e) => onSearchByClick(e, el)}
              key={el}
              className="control active"
              data-filter="all"
            >
              {el}
            </li>
          ))}
        </ul>
        <div className="row course-items-area">
          {/* course */}
          {newField.map((el) =>
            // groupCard(`/card/${el.id}`, el)
            auth || teacherAuth
              ? groupCard(`/card/${el.id}`, el)
              : groupCard("/signin", el)
          )}
        </div>
      </div>
      {/* course section end */}
    </section>
  );
};
export default Cards;
