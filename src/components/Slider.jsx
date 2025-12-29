import React from "react";
import feature1 from "../assets/image/feature-leadcrm-1.webp";
import feature2 from "../assets/image/feature-leadcrm-2.webp";
import feature3 from "../assets/image/feature-leadcrm-3.webp";
import feature4 from "../assets/image/feature-leadcrm-4.webp";
import feature5 from "../assets/image/feature-leadcrm-5.webp";
import feature6 from "../assets/image/feature-leadcrm-6.webp";
import feature7 from "../assets/image/feature-leadcrm-7.webp";
import feature8 from "../assets/image/feature-leadcrm-8.webp";
import feature9 from "../assets/image/Supports-9-Global-Languages.png";

const slides = [
  {
    img: feature1,
    text: "One click push to CRM",
  },
  {
    img: feature2,
    text: "Custom Field Mapping",
  },
  {
    img: feature3,
    text: "Instant Email Finder",
  },
  {
    img: feature4,
    text: "Advanced Waterfall Enrichment",
  },
  {
    img: feature5,
    text: "Seamless Deal Management",
  },
  {
    img: feature6,
    text: "Access to 700M+ Contacts",
  },
  {
    img: feature7,
    text: "Advanced AI Productivity",
  },
  {
    img: feature8,
    text: "Bulk Export & Enrich",
  },
  {
    img: feature9,
    text: "Supports 9 Global Languages",
  },
];

const Slider = () => {
  return (
    <section className="overflow-hidden slider-wrapper position-relative">
      <div className="slider-track">
        {[...slides, ...slides].map((item, index) => (
          <div className="slide d-flex align-items-center justify-content-center gap-2" key={index}>
            <img src={item.img} alt={item.text} loading="lazy" />
            <div className="slide-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
