import React from 'react'
import { NavLink } from 'react-bootstrap';
import supportimage from "../assets/image/our-support-image.png";
import oursupport from "../assets/image/our-support-icon.svg";

const Support = () => {
  return (
    <section className='suppported-section my-5 py-5 position-relative'>
        <div className="container">
            <div className="heading-box position-relative d-flex align-items-center justify-content-center flex-column">
                <h2 className='heading-title'>Our Supported LeadCRM</h2>
                <p>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We<br/> don’t want you to miss any revenue opportunity on the internet!</p>
                <img src={oursupport} alt={oursupport} className='our-support-icon position-absolute' />
            </div>
            <div className="image-box">
                <img src={supportimage} alt={supportimage} />
            </div>
            <div className="integrate-btn mx-auto d-flex align-items-center justify-content-center">
                <NavLink href='#' className='btn-secondary'>Lets Integrate your CRM Now!</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Support