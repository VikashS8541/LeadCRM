import React from "react";
import redCrossIcon from "../assets/image/red-cross-icon.svg";
import bidirection from "../assets/image/bi-directional.svg";
import access from "../assets/image/access-700.svg";
import crmoverlay from "../assets/image/crm-overlay.svg";
import ai from "../assets/image/ai-responsive.svg";
import minilogo from "../assets/image/mini-logo.svg";
import withleadcrm from "../assets/image/with-lead-crm.png";
import withoutleadcrm from "../assets/image/without-leadcrm.png";
import savetimeimg from "../assets/image/save-40-hrs.png";
import { NavLink } from "react-bootstrap";

const Prospector = () => {
  const withoutCRM = [
    {
      id: 1,
      icon: redCrossIcon,
      title: "Manual Data Entry",
      subtitle: "3+ Hours wasted daily",
      description:
        "Copying LinkedIn contacts to CRM manually plus losing conversation history",
    },
    {
      id: 2,
      icon: redCrossIcon,
      title: "Incomplete Data",
      subtitle: "60% Data Incomplete",
      description:
        "LinkedIn profiles missing Email and Phones from 700M+ Database",
    },
    {
      id: 3,
      icon: redCrossIcon,
      title: "No CRM Visibility",
      subtitle: "Zero context available",
      description:
        "Can’t see existing CRM contacts when browsing LinkedIn profiles",
    },
    {
      id: 4,
      icon: redCrossIcon,
      title: "Limited Productivity",
      subtitle: "No smart assistance",
      description:
        "Writing messages manually plus no AI assistant for reply, Invite or comments.",
    },
  ];

  const withCRM = [
    {
      id: 1,
      icon: bidirection,
      title: "Complete Bi-Directional Sync",
      subtitle: "100% Automated",
      description:
        "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    },
    {
      id: 2,
      icon: access,
      title: "700M+ Contacts + Enrichment",
      subtitle: "Verified Data",
      description:
        "Get verified emails and phone numbers from a vast global database.",
    },
    {
      id: 3,
      icon: crmoverlay,
      title: "CRM Overlay on LinkedIn",
      subtitle: "Full Visibility",
      description:
        "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    },
    {
      id: 4,
      icon: ai,
      title: "AI Response + Templates + Bulk Exports",
      subtitle: "10x Faster Outreach",
      description:
        "Save time with AI-crafted replies, pre-built templates, and one-click data exports",
    },
  ];

  return (
    <section className="overflow-hidden position-relative prospector-challenges my-5">
      <div className="container">
        <h2 className="heading-title text-center mb-5">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        <div className="comparision-layout-inner row align-items-stretch justify-content-center">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="challenge-card without-card">
              <img src={withoutleadcrm} alt="Without LeadCRM" />
              <h3>Without LeadCRM</h3>
              <div className="points">
                {withoutCRM.map((item) => (
                  <div className="point" key={item.id}>
                    <img src={item.icon} alt="icon" />
                    <div className="title-para d-flex flex-column">
                      <div className="titlebox flex-wrap d-flex align-items-center gap-2">
                        <strong>{item.title}</strong>
                        <span>{item.subtitle}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="vs-box position-relative col-lg-1 col-md-1 col-sm-12 d-flex align-items-center justify-content-center">
            <p className="vs-text">VS</p>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="challenge-card with-card">
              <img src={withleadcrm} alt="With LeadCRM" />
              <div className="lead-title flex-wrap d-flex align-items-center gap-2">
                <h3>With LeadCRM</h3>
                <img src={minilogo} alt="Lead CRM Mini Logo" />
                <span>4+ Hours/day Saved</span>
              </div>
              <div className="points">
                {withCRM.map((item) => (
                  <div className="point" key={item.id}>
                    <img src={item.icon} alt="icon" />
                    <div className="title-para d-flex flex-column">
                      <div className="titlebox d-flex align-items-center gap-2">
                        <strong>{item.title}</strong>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="start-lead-btn">
          <NavLink href="#" className="btn-secondary">
            Start Using LeadCRM Now
          </NavLink>
          <img src={savetimeimg} alt="image-box" className="image-box"/>
        </div>
      </div>
    </section>
  );
};

export default Prospector;
