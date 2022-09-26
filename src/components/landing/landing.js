import React, { useEffect, useState } from "react";
import Header from "./header";
import SearchBar from "./search-bar";
import Cards from "./cards/cards";
import Register from "./register";
import { showAction } from "../../actions/course-action";
import { useDispatch } from "react-redux";

const Landing = () => {
  const [course, setCourse] = useState([]);
  const [termCourse, setTermCourse] = useState("");
  const [termField, setfield] = useState("");
  const [updateCourse, setUpdateCourse] = useState(false);

  const dispatch = useDispatch();
  const getCourses = () => {
    dispatch(showAction()).then((res) => {
      setCourse(res);
      setUpdateCourse(!updateCourse);
    });
  };
  useEffect(() => {
    getCourses();
  }, []);
  const searchOnChange = (e) => {
    setTermCourse(e.target.value);
  };
  const searchOnChangeField = (e) => {
    setfield(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    getCourses();
    const name = termCourse.toString().toLowerCase();

    const field = termField.toString().toLowerCase();
    const search = course.filter((item) => {
      const item1 = item.name.toString().toLowerCase();

      const item2 = item.field.toString().toLowerCase();

      return item1.includes(name) && item2.includes(field);
    });

    setCourse(search);
    setUpdateCourse(!updateCourse);
  };
  return (
    <div>
      <Header />
      <SearchBar
        searchOnChangeField={searchOnChangeField}
        searchOnChange={searchOnChange}
        submitSearch={submitSearch}
      />

      <Cards courses={course} updateCourse={updateCourse} />
      <Register />
    </div>
  );
};
export default Landing;
