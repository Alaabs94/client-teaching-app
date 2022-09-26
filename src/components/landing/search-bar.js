import React from "react";
const SearchBar = ({ searchOnChange, searchOnChangeField, submitSearch }) => {
  return (
    <section
      className="hero-section set-bg"
      style={{ backgroundImage: "url(img/bg.jpg)" }}
    >
      <div className="container">
        <div className="hero-text text-white">
          <h2>Get The Best Free Online Courses</h2>
          <p>
            Propel your career, get a degree, or expand your knowledge at any
            level. <br /> Expand your curriculum through blended learning.
          </p>
        </div>
        <div className="search-warp">
          <div className="section-title text-white">
            <h2>
              <span>Search your course</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {/* <!-- search form --> */}
              <form
                // onSubmit={(e) => submitSearch(e)}
                className="course-search-form"
              >
                <input
                  onChange={(e) => searchOnChange(e)}
                  type="text"
                  placeholder="Course"
                />
                <input
                  onChange={(e) => searchOnChangeField(e)}
                  type="text"
                  className="last-m"
                  placeholder="Category"
                />
                <button
                  onClick={(e) => submitSearch(e)}
                  type="submit"
                  className="site-btn "
                >
                  Search Couse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchBar;
