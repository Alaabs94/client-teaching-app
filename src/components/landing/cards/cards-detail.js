import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  subscribeAction,
  getStatusAction,
} from "../../../actions/subscription-action";
import { useLocation } from "react-router-dom";
import CoursesDetails from "./cours-detail";
const CardDetails = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const location = useLocation();
  const data = location.state;
  const el = location.state.el;

  useEffect(() => {
    subscriberStatus();
  }, []);
  const subscriberStatus = () => {
    const courseId = el.id;
    const userId = data.userInfo.id;

    if (data.auth === true) {
      dispatch(getStatusAction(courseId, userId)).then((res) => {
        setStatus(res.subscription);
      });
    }
  };
  const onSubmitSubscribe = (e) => {
    e.preventDefault();

    dispatch(subscribeAction(el.id, data.userInfo.id))
      .then((res) => {
        subscriberStatus();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="blog-page spad pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {/* <!-- blog post --> */}
            <div className="blog-post">
              <img src={el.picture} alt="" />
              <h3>Subscribe to our course and get the best offers</h3>
              <h4>{el.name}</h4>

              <div className="blog-metas">
                <div className="blog-meta author">
                  <div
                    className="post-author set-bg"
                    // data-setbg="img/authors/1.jpg"
                    style={{
                      backgroundImage: `url(${el.teacher.picture})`,
                    }}
                  ></div>
                  <a href="/signup">
                    {el.teacher.firstname + "" + el.teacher.lastname}
                  </a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">{el.field}</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">June 12, 2018</a>
                </div>
                <div className="blog-meta">
                  <a href="/signup">2 Comments</a>
                </div>
              </div>
              <p>{el.description}</p>
              {data.auth === true && status === false && (
                <button
                  // href="/signup"
                  className="site-btn readmore"
                  onClick={(e) => onSubmitSubscribe(e)}
                >
                  Subscribe
                </button>
              )}
              {data.auth === true && status === true && (
                <button
                  // href="/signup"
                  className="site-btn readmore"
                  onClick={(e) => onSubmitSubscribe(e)}
                >
                  Unsubscribe
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {status && <CoursesDetails videos={el.videos} />}
    </section>
  );
};
export default CardDetails;
