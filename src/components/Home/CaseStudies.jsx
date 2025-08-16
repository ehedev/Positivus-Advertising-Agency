import React from 'react';
import SectionHeader from './SectionHeader';
import { caseStudies } from "../../data/casesData";

const CaseStudies = () => {
  return (
    <section id="caseStudies" className="case-studies-section py-5">
      <div className="container">
        <SectionHeader
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        {/* === Desktop Layout === */}
        <div className="case-container case-studies-desktop mt-4 d-none d-lg-block rounded-5">
          <div className="row text-center text-md-start py-3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`col-md-4 px-5 ${
                  index !== caseStudies.length - 1
                    ? "border-end border-light-subtle"
                    : ""
                }`}
              >
                <p className="case-p fs-6">{study.text}</p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <a href="javascript:void(0);" className="case-link text-decoration-none" onClick={(e) => e.preventDefault()}>
                    Learn more <i className="fas fa-arrow-right arrow-icon"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Mobile Slider Layout === */}
        <div className="case-studies-mobile d-lg-none mt-4 overflow-auto px-1">
          <div className="case-wrap d-flex flex-nowrap gap-3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-container case-card rounded-5 p-4 flex-shrink-0"
              >
                <p className="case-p fs-6">{study.text}</p>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <a href="javascript:void(0);" className="case-link text-decoration-none">
                    Learn more <i className="fas fa-arrow-right arrow-icon"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;