import React from "react";

function Contacts() {
  return (
    <div className="col-lg-4">
      <div className="contact-info-area">
        <div className="section-title text-left p-0">
          <h2>Contact Info</h2>
          <p>
            Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla
            dictum. Ut ac ligula sapien. Suspendi sse cursus faucibus finibus.
          </p>
        </div>
        <div className="phone-number">
          <span>Direct Line</span>
          <h2>+53 345 7953 32453</h2>
        </div>
        <ul className="contact-list">
          <li>
            1481 Creekside Lane <br />
            Avila Beach, CA 931
          </li>
          <li>+53 345 7953 32453</li>
          <li>yourmail@gmail.com</li>
        </ul>
        <div className="social-links">
          <a href="/home">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="/">
            <i className="fa fa-behance"></i>
          </a>
          <a href="/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
