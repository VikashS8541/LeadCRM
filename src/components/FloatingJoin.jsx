import React from "react";
import Nav from "react-bootstrap/Nav";

import joinIcon from "../assets/image/join-thousand-icon.svg";
import noCardIcon from "../assets/image/no-credit-card-image.svg";
import trailIcon from "../assets/image/14-days-trail.svg";
import floatchar from "../assets/image/float-char-image.png";

const FloatingJoin = ({ visible = false }) => {
  return (
    <section className={`join-floating-wrapper ${visible ? "visible" : "hidden"}`}>
      <div className="join-box">
        <div className="join-top d-flex align-items-center justify-content-center justify-content-md-between w-100 flex-wrap flex-md-nowrap">
          <div className="join-left d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
            <img src={floatchar} alt="users" />
            <h4>Join with our Thousands of professionals Now !</h4>
          </div>

          <div className="join-right">
            <Nav.Link href="#" className="btn-secondary">
              Get a Free Trial Now!
            </Nav.Link>
          </div>
        </div>
        <div className="join-features d-flex align-items-center justify-content-center">
          <div className="feature">
            <img src={noCardIcon} alt="no credit card" />
            <span>
              <strong>No Credit Card</strong> Required
            </span>
          </div>

          <div className="feature">
            <img src={trailIcon} alt="14 days" />
            <span>
              <strong>14 Days</strong> Free Trial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingJoin;
