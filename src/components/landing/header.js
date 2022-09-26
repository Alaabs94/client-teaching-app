import React from "react";
import Dropdowns from "../../UI-components/dropdowns";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.authReducer.auth);
  const teacherAuth = useSelector((state) => state.authTeacherReducer.auth);

  return (
    // <!-- Header section -->
    <header className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3">
            <div className="site-logo">
              <img src="img/logo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <Dropdowns />
            <nav className="main-menu">
              <ul>
                <li>
                  <a className="main-menu-link" href="/">
                    Home
                  </a>
                </li>

                {auth === true && (
                  <li>
                    <a className="main-menu-link" href="/student">
                      Your profile
                    </a>
                  </li>
                )}

                {teacherAuth === true && (
                  <li>
                    <a className="main-menu-link" href="/teacher">
                      Your profile
                    </a>
                  </li>
                )}

                <li>
                  <a className="main-menu-link" href="#cards">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="main-menu-link" href="blog">
                    News
                  </a>
                </li>
                <li>
                  <a className="main-menu-link" href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Header section end --> */}
    </header>
  );
};
export default Header;
