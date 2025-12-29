import React from "react";
import Nav from "react-bootstrap/Nav";
import extension from "../assets/image/install-extension.png";
import linkedln from "../assets/image/browse-linkedln.png";
import enriched from "../assets/image/get-enriched-data.png";
import synccrm from "../assets/image/sync-crm.png";
import rightarrow from "../assets/image/right-arrow.svg";
import purpleball from "../assets/image/purple-ball.svg";
import bluelineframe from "../assets/image/how-it-work-blue-line-frame.png";

const Works = () => {
  const steps = [
    {
      id: 1,
      step: "1",
      title: "Install the Extension",
      description:
        "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: extension,
    },
    {
      id: 2,
      step: "2",
      title: "Browse LinkedIn",
      description:
        "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: linkedln,
    },
    {
      id: 3,
      step: "3",
      title: "Get Enriched Data",
      description:
        "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: enriched,
    },
    {
      id: 4,
      step: "4",
      title: "Sync to CRM Instantly",
      description:
        "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
      image: synccrm,
    },
  ];

  return (
    <section
      className="how-it-works my-5 position-relative" style={{ "--icon": `url(${purpleball})` }}>
      <div className="container">
        <div className="row heading-box">
          <div className="col-12">
            <h2 className="heading-title">How it Works</h2>
            <p>
              From setup to success in <strong>4 simple steps</strong>
            </p>
          </div>
        </div>

        <div className="row how-card-layout position-relative overflow-hidden" style={{ "--image": `url(${bluelineframe})` }}>
          {steps.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
              <div className="work-card">
                <div className="content-box">
                  <span className="step-number">{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="image-box">
                  <img src={item.image} alt="workflow" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="try-lead-btn text-center">
          <Nav.Link
            href="#"
            className="btn-secondary d-inline-flex align-items-center gap-2"
          >
            Try LeadCRM Now
            <img src={rightarrow} alt="Right Arrow" />
          </Nav.Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
