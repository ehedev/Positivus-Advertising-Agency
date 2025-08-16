import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header d-flex flex-column flex-md-row align-items-center mb-5 text-center text-lg-start">
      <h2 className="section-header-title me-md-4 mb-4 mb-md-0 fw-medium px-2 py-1 rounded-2">
        {title}
      </h2>
      <div className="col section-header-description">
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default SectionHeader;