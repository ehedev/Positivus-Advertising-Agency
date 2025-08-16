import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import { FontAwesomeIcon, faArrowRight } from "../../imports/global";
import { ctaIllustrationLight, ctaIllustrationDark } from "../../imports/assets";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    axios
      .get("https://6889cca94c55d5c7395398fb.mockapi.io/api/services")
      .then((res) => setServicesData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const visibleServices = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <SectionHeader
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />

        {/* Services Cards */}
        <div className="row g-4 justify-content-center">
          {visibleServices.map((service, index, arr) => {
            const isLast = index === arr.length - 1;
            const isOdd = arr.length % 2 !== 0;
            const shouldShiftLeft = isOdd && isLast;

            return (
              <div
                key={service.id}
                className={`col-12 col-lg-6 ${shouldShiftLeft ? "me-auto" : ""}`}
              >
                <div
                  className="service-card h-100 d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: service.bgColor,
                    color: service.textColor,
                  }}
                >
                  {/* Top row: title and icon */}
                  <div className="service-card-header d-flex justify-content-between align-items-start">
                    <h5
                      className="service-title"
                      style={{
                        backgroundColor: service.titleBg,
                        color: service.textColor,
                      }}
                    >
                      {service.title}
                    </h5>
                    <img
                      alt={service.title}
                      src={service.icon}
                      className="service-icon"
                    />
                  </div>

                  {/* Learn more row */}
                  <div className="learn-more d-flex align-items-center gap-2 mt-4">
                  <div
                    className="learn-more-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: service.arrowBgColor || "#000",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: service.arrowColor || "#fff", fontSize: "16px", transform: "rotate(-45deg)" }}
                    />
                  </div>
                    <a
                      href="#"
                      className="fw-normal text-decoration-none"
                      style={{ color: service.linkColor }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        {servicesData.length > 6 && (
          <div className="text-center mt-4">
            <button
              className="view-button btn btn-outline-dark"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="cta-section mt-5 rounded-4 shadow-sm p-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-start">
              <h4 className="cta-title fw-bold mb-3">Let’s make things happen</h4>
              <p className="cta-description mb-4">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <button className="btn btn-dark custom-button"
                      onClick={() => {
                        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
              }}
              >
                Get your free proposal
              </button>
            </div>
            <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0 d-none d-lg-block">
              <img
                src={theme === "light" ? ctaIllustrationLight : ctaIllustrationDark}
                alt="CTA Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
