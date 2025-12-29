import React from "react";
import { NavLink } from "react-bootstrap";
import logo from "../assets/image/logo.svg";
import facebook from "../assets/image/facebook.svg";
import twitter from "../assets/image/twitter.svg";
import linkedln from "../assets/image/linkedln.svg";
import instagram from "../assets/image/instagram.svg";
import chromeicon from "../assets/image/chrome-icon.svg";
import email from "../assets/image/email.svg";
import phone from "../assets/image/phone.svg";
import help from "../assets/image/help.svg";

const Footer = ({ observeRef }) => {
  // Here is the Menu in the array of object
  const integrations = [
    { name: "HubSpot", link: "HubSpot" },
    { name: "Salesforce", link: "Salesforce" },
    { name: "Pipedrive", link: "Pipedrive" },
    { name: "Close.io", badge: "Coming Soon", link: "Close.io" },
    { name: "Insightly", badge: "Coming Soon", link: "Insightly" },
  ];

  const alternatives = [
    { name: "Surfe VS LeadCRM", link: "Surfe VS LeadCRM" },
    { name: "Linkmatch Alternative", link: "Linkmatch Alternative" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "Privacy Policy" },
    { name: "Terms of Use", link: "Terms of Use" },
  ];

  const contacts = [
    {
      icon: email,
      name: "support@leadcrm.io",
      link: "mailto:support@leadcrm.io",
    },
    { icon: phone, name: "+1 231-538-7466", link: "tel:+12315387466" },
    { icon: help, name: "Help Center", link: "Help Center" },
  ];

  const socialIcons = [
    { icon: facebook, link: "Facebook", name: "Facebook" },
    { icon: twitter, link: "Twitter", name: "Twitter" },
    { icon: linkedln, link: "Linkedln", name: "Linkedln" },
    { icon: instagram, link: "Instagram", name: "Instagram" },
  ];

  return (
    <footer className="overflow-hidden position-relative">
      <div className="container">
        <div className="row footer-inner">
          <div className="logo-box col-lg-4 col-md-6 col-sm-12">
            <img src={logo} alt="LeadCRM Logo" className="mb-4 logo" />
            <p>
              LeadCRM is LinkedIn integration
              <br /> tool for your CRM.
            </p>
            <div className="d-flex align-items-center justify-content-start gap-3 social-icon-box">
              {socialIcons.map((item, index) => (
                <NavLink key={index} href={item.name} className="icons">
                  <img src={item.icon} alt={item.name} />
                </NavLink>
              ))}
            </div>
          </div>

          <div className="integration common-des col-lg-2 col-md-6 col-sm-12">
            <h4>Integrations</h4>
            <ul className="list-unstyled mb-0">
              {integrations.map((item, index) => (
                <li key={index}>
                  <NavLink href={item.link}>{item.name}</NavLink>
                  {item.badge && <span className="badge">{item.badge}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="alternative common-des col-lg-2 col-md-6 col-sm-12">
            <h4>Alternative</h4>
            <ul className="list-unstyled mb-0">
              {alternatives.map((item, index) => (
                <li key={index}>
                  <NavLink href={item.link}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="legal common-des col-lg-2 col-md-6 col-sm-12">
            <h4>Legal</h4>
            <ul className="list-unstyled mb-0">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <NavLink href={item.link}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact common-des col-lg-2 col-md-6 col-sm-12">
            <h4>Contact Us</h4>
            <ul className="list-unstyled mb-0">
              {contacts.map((item, index) => (
                <li key={index}>
                  <img src={item.icon} alt={item.name} />
                  <NavLink href={item.link}>{item.name}</NavLink>
                </li>
              ))}
            </ul>

            <div className="chrome-extension d-flex align-items-center justify-content-end">
              <button className="dark-btn d-flex align-items-center w-100 justify-content-between">
                <div className="text text-start d-flex flex-column">
                  <span>Available in</span>
                  <span>Chrome</span>
                </div>
                <img src={chromeicon} alt="Chrome" width="30" height="30" />
              </button>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="row">
            <div className="col-12">
              <p>
                Disclaimer : LeadCRM is not endorsed or certified by LinkedIn.
                All LinkedIn(tm) logos and trademarks displayed on this tool are
                property of LinkedIn. LeadCRM is distributed AS IS. Your use of
                LeadCRM is at your own risk.
              </p>
              <h6>Copyright © 2025 LeadCRM. All Rights Reserved.</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
