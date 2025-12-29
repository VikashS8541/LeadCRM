import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import avatar1 from "../assets/image/avatar-1.png";
import avatar2 from "../assets/image/avatar-2.png";
import avatar3 from "../assets/image/avatar-3.png";

import reviewgoogle from "../assets/image/review-play-icon.svg";
import starreview from "../assets/image/star-review.svg";

import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {

 const [activeNav, setActiveNav] = useState(null);

  const testimonials = [
    {
      id: 1,
      review:
        "Reliable Data Sync. I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      rating: 5,
      name: "David Fincher",
      source: "On Capterra",
      avatar: avatar1,
    },
    {
      id: 2,
      review:
        "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient.",
      rating: 5,
      name: "Lillian Williams",
      source: "On Capterra",
      avatar: avatar2,
    },
    {
      id: 3,
      review:
        "Reliable Data Sync. I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      rating: 5,
      name: "Michael",
      source: "On Capterra",
      avatar: avatar3,
    },
    {
      id: 4,
      review:
        "It’s been a really positive experience overall. I use LeadCRM to build qualified leads from LinkedIn and sync them into HubSpot. The platform has saved me hours of manual work every week. I would especially highlight their customer support — they are fast, knowledgeable, and genuinely helpful. ",
      rating: 5,
      name: "Olivia M.",
      source: "On Capterra",
      avatar: avatar1,
    },
    {
      id: 5,
      review:
        "Keeps Me Organized I never lose track of a lead now that I can see and create tasks right in LinkedIn. The inbuilt enrichment is excellent, and when it misses anything, integrations fill in the gaps.",
      rating: 5,
      name: "Paul Kevin",
      source: "On Google",
      avatar: avatar2,
    },
    {
      id: 6,
      review:
        "Hunter.io Integration is Great I love that LeadCRM uses multiple sources, including its own. If one source doesn’t have the data, the next source does. Message templates help me send quick, consistent messages.",
      rating: 5,
      name: "Ruthie Smith",
      source: "On G2",
      avatar: avatar3,
    },
  ];

  return (
     <section className="overflow-hidden testimonials-section my-5 py-5 position-relative">
      <div className="container">
        <h2 className="heading-title">
          What people are saying about LeadCRM
        </h2>

        <div className="testimonial-wrapper position-relative">
          <div className="testimonial-nav d-flex gap-3">
            <button
              className={`swiper-btn prev-btn ${
                activeNav === "prev" ? "active" : ""
              }`}
              onClick={() => setActiveNav("prev")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className={`swiper-btn next-btn ${
                activeNav === "next" ? "active" : ""
              }`}
              onClick={() => setActiveNav("next")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <Swiper
            className="testimonial-inner-main"
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card">
                  <p className="testimonial-text">“{item.review}”</p>

                  <div className="testimonial-rating d-flex align-items-center gap-2 my-3">
                    <div className="review-play">
                      <img src={reviewgoogle} alt="google" />
                    </div>

                    <div className="stars d-flex gap-1">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <span key={index}>
                          <img src={starreview} alt="star" />
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="testimonial-user d-flex align-items-center gap-2">
                    <img
                      src={item.avatar || ""}
                      alt={item.name}
                      className="user-avatar"
                    />

                    <div className="user-info">
                      <h6>{item.name}</h6>
                      <span>{item.source}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
