import { Nav } from "react-bootstrap";
import yellowline from "../assets/image/yellow-line-title.png";
import rocket from "../assets/image/rocket.svg";
import hubspot from "../assets/image/hubspot.svg";
import plogo from "../assets/image/p.svg";
import salesforce from "../assets/image/salesforce.svg";
import review from "../assets/image/review.svg";
import chromeicon from "../assets/image/chrome-icon.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden hero-section position-relative overflow-hidden">
      <div className="container">
        <div className="text-center hero-inner position-relative z-1">
          <div className="banner-sub-title mb-3">
            <img src={rocket} alt="icon" width="20" height="20" />
            <small>Thousands of Professionals using LeadCRM</small>
          </div>

          <div className="heading-para d-flex flex-column justify-content-center align-items-center">
            <div className="heading-image position-relative">
              <h1>
                LinkedIn CRM Integration
                <br />
                Capture, Sync and Enrich in{" "}
                <span className="position-relative light-text-blue">
                  Both Ways
                </span>
              </h1>
              <img
                src={yellowline}
                alt="yellow-line"
                className="yellow-line position-absolute bottom-1"
              />
            </div>
            <p>
              Automatically sync LinkedIn prospects to your CRM and overlay
              existing CRM contacts on LinkedIn profiles. Complete
              bi-directional integration with HubSpot, Salesforce, and
              Pipedrive.
            </p>
          </div>
          <div className="work-with-us mx-auto">
            <h4>Works with</h4>
            <div className="work-image-icon d-flex align-items-center justify-content-start flex-wrap gap-3 rounded-pill">
              <img src={hubspot} alt="hubspot" />
              <img src={plogo} alt="pipedrive" />
              <img src={salesforce} alt="salesforce" />
            </div>
          </div>

          <div className="review-us d-flex justify-content-center gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <img src={review} alt="review" />
            </div>
          </div>

          <div className="hero-cta-btn d-flex justify-content-center gap-3 flex-wrap">
            <Nav.Link className="dark-btn d-flex align-items-center justify-content-between" href="#">
              <div className="text-box d-flex flex-column align-items-start me-2">
              <small>Available in</small>
              <span>Chrome Web Store</span>
              </div>
              <img src={chromeicon} alt="chrome-icon" />
            </Nav.Link>
            <Nav.Link className="btn-secondary" href="#">
              Get a Free Trial Now!
            </Nav.Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
