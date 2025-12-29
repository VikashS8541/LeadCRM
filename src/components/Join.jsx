import React from 'react'
import { NavLink } from 'react-bootstrap';
import rightarrow from "../assets/image/right-arrow.svg";
import jointhousand from "../assets/image/join-thousand-icon.svg";
import professional from "../assets/image/professional-join.png";

const Join = () => {
  return (
    <section className='join-us-section my-5 py-5 position-relative'>
      <div className="icon">
        <img src={jointhousand} alt={jointhousand} />
      </div>
        <div className="container">
            <h2 className='heading-title'>Join Thousands of Professionals Using LeadCRM</h2>
            <div className="join-inner" style={{"--image": `url(${professional})`}}>
                <h2>Your LinkedIn Powerhouse for Smarter Lead Management</h2>
            </div>
            <div className="start-btn d-flex align-items-center justify-content-center mx-auto">
                <NavLink href='#' className='btn-secondary'>Get Started Today <span className='ms-4'><img src={rightarrow} alt="Right Arrow" /></span></NavLink>
            </div>
        </div>
    </section>
  )
}

export default Join