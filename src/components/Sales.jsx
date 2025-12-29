import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NavLink from "react-bootstrap/NavLink";

import greenarrow from "../assets/image/green-right-arrow.svg";
import crmdata from "../assets/image/crm-data.svg";
import crmsync from "../assets/image/crm-data-sync.svg";
import bulkexport from "../assets/image/bulk-export.svg";
import airesponsive from "../assets/image/ai-responsive.svg";
import robot from "../assets/image/robot.svg";

import CRMDataEnrichment from "../assets/image/CRM-Data-Enrichment.png";
import CRMDatavendor from "../assets/image/CRM-Data-vendor-Enrichment.webp";
import CRMDataSync from "../assets/image/CRM-Data-Sync.png";
import CRMDataSync1 from "../assets/image/CRM-Data-Sync-1.png";
import BulkExportEnrichment from "../assets/image/Bulk-Export-Enrichment.png";
import BulkExportEnrichment1 from "../assets/image/Bulk-Export-Enrichment-1.png";
import AICommentimage from "../assets/image/AI-Comment-image.webp";
import Templateimges from "../assets/image/Template-imges.webp";

const Sales = () => {
  const tabsData = [
    {
      key: "enrichment",
      title: "CRM Data Enrichment",
      icon: crmdata,
      description:
        "It's hard to find the accurate contact data for every prospects by",
      badge: "Incomplete Data",
      boxColor: "#F0F4FD",
      content: [
        {
          heading: "Here is how LeadCRM tackles that situation.",
          linkText: "Try LeadCRM Data Enrichment",
          image: CRMDataEnrichment,
        },
        {
          heading: "Capture Every Lead. Every Time.",
          linkText: "Try Our Advanced Waterfall Enrichment",
          image: CRMDatavendor,
        },
      ],
    },

    {
      key: "sync",
      title: "CRM Data Sync",
      icon: crmsync,
      description: "40+ hours lost to copy-paste. Every. Single. Month.",
      badge: "Lost Lead Context",
      boxColor: "#FFFFCE",
      content: [
        {
          heading: "The Solution? LeadCRM's Instant Data Sync.",
          linkText: "Try LeadCRM Data Sync",
          image: CRMDataSync,
        },
        {
          heading: "Unlock instant CRM insights on every profile you visit.",
          linkText: "Try LeadCRM Data Overlay",
          image: CRMDataSync1,
        },
      ],
    },

    {
      key: "bulk",
      title: "Bulk Export & Enrichment",
      icon: bulkexport,
      description: "Your Sales Navigator Workflow is Broken.",
      badge: "Lost Productivity",
      boxColor: "#ECEAFF",
      content: [
        {
          heading: "Enrich & Export 250 Profiles in Just 60 Seconds.",
          linkText: "Try LeadCRM Bulk Export",
          image: BulkExportEnrichment,
        },
        {
          heading: "Export & enrich profiles to the CRM or G-Sheet",
          linkText: "Try LeadCRM Bulk Export",
          image: BulkExportEnrichment1,
        },
      ],
    },

    {
      key: "ai",
      title: "AI Productivity",
      icon: airesponsive,
      description:
        "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.",
      badge: "No Smart Assistance",
      boxColor: "#FFE9FE",
      content: [
        {
          heading: "Get the same high-impact engagement in 80% less time.",
          linkText: "Try LeadCRM AI Response",
          image: AICommentimage,
        },
        {
          heading: "Use Shortcuts to reply faster.",
          linkText: "Try LeadCRM Templates",
          image: Templateimges,
        },
      ],
    },
  ];

  return (
    <section className="sales-section py-5 position-relative" style={{ "--image": `url(${robot})` }}>
      <div className="container">
        <div className="heading-box d-flex flex-column justify-content-center text-center align-items-center">
          <h2 className="heading-title">Complete LinkedIn Sales Solutions</h2>
          <p>Everything you need for professional LinkedIn prospecting</p>
        </div>

        <Tabs defaultActiveKey="enrichment" className="tablist">
          {tabsData.map((tab) => (
            <Tab
              key={tab.key}
              eventKey={tab.key}
              title={
                <span className="d-flex align-items-center gap-2">
                  <img src={tab.icon} alt={tab.title} />
                  {tab.title}
                </span>
              }
            >
              <div className="tab-content">
                <p className="description-text">
                  {tab.description}
                  <span className="badge">{tab.badge}</span>
                </p>

                <div className="row box-content">
                  {tab.content.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-md-6 col-sm-12"
                    >
                      <div className="bg-content-inner" style={{ backgroundColor: tab.boxColor }}>
                        <h3>{item.heading}</h3>

                        <NavLink href={item.linkText} className="dark-green">
                          {item.linkText}
                          <img src={greenarrow} alt="Green Arrow" />
                        </NavLink>
                        <img
                          src={item.image}
                          alt={item.image}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Sales;
