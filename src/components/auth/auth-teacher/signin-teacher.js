import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contacts from "../../../UI-components/contacts";
import { signinActionTeacher } from "../../../actions/teacher-auth-actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SigninTeacher(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);
  const handelInputChange = (event) => {
    // console.log(event.target.value)

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();

    if (user.password === "" || user.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "empthy field",
      });
    } else {
      dispatch(signinActionTeacher(user))
        .then((res) => {
          Swal.fire("Good job!", "You login successfully!", "success");
          navigate("/");
        })
        .catch((err) => {
          console.log("err.response.data", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data[0].message,
          });
        });
    }
  };

  return (
    <section className="contact-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form-warp">
              <div className="section-title text-white text-left">
                <h2>Sign in as teacher</h2>
                <p>Welcome back, add new courses and stay updated</p>
              </div>
              <form onSubmit={(e) => onSubmitForm(e)} className="contact-form">
                <input
                  name="email"
                  value={user.email}
                  onChange={handelInputChange}
                  type="email"
                  placeholder="Your E-mail"
                />
                <input
                  name="password"
                  value={user.password}
                  onChange={handelInputChange}
                  type="password"
                  placeholder="Your password"
                />

                <button type="submit" className="site-btn">
                  Sign in
                </button>
                <div>
                  <p>
                    If you don't have an account{" "}
                    <a className="main-menu-link" href="/signupteacher">
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* begin */}
          <Contacts />
          {/* end */}
        </div>
      </div>
    </section>
  );
}

export default SigninTeacher;
