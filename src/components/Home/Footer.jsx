import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon, faLinkedinIn, faFacebookF, faTwitter } from '../../imports/global';
import { whiteLogo } from '../../imports/assets';

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLarge;
};

const Footer = () => {
  const isLargeScreen = useIsLargeScreen();

  const navLinks = [
    { label: 'About us', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#caseStudies' },
    { label: 'Pricing', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  return (
    <div className="footer-section px-md-0 mt-5" id='footer'>
      <div className={isLargeScreen ? 'container' : ''}>
        <div className="footer-inner text-center text-md-start rounded-lg-top px-5 py-4 mx-auto">
          {/* First Row */}
          <div className="row gy-4 align-items-center mb-4 mb-md-5 mt-1">
            {/* Logo */}
            <div className="col-md-3 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <a href="/" className="d-flex align-items-center gap-2 text-decoration-none">
                <img src={whiteLogo} alt="Logo" />
                <h5 className="mb-0">Positivus</h5>
              </a>
            </div>

            {/* Links */}
            <div className="col-md-6 d-flex flex-column flex-md-row justify-content-center gap-3 small">
              {navLinks.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={
                    item.label === "About us" || item.label === "Pricing" || item.label === "Blog"
                      ? (e) => e.preventDefault()
                      : undefined
                  }
                  className={`fw-light ${index === navLinks.length - 1 ? 'd-none d-md-block' : ''}`}
                  style={{ textDecoration: isLargeScreen ? undefined : 'none' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Icons – Large Screens Only */}
            <div className="col-md-3 d-none d-md-flex justify-content-end gap-3">
              <Link to="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-links" />
              </Link>
              <Link to="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="social-links" />
              </Link>
              <Link to="https://x.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-links" />
              </Link>
            </div>
          </div>

          {/* Second Row */}
          <div className="row gy-4">
            {/* Contact Info */}
            <div className="col-md-5">
              <div className="mb-2">
                <span className="badge text-dark fw-medium">Contact us:</span>
              </div>
              <p className="my-3 small fw-light">Email: info@positivus.com</p>
              <p className="mb-3 small fw-light">Phone: 555-567-8801</p>
              <p className="mb-0 small fw-light">
                Address: 1234 Main St<br />
                Moonstone City, Stardust State 12345
              </p>
            </div>

            {/* Email Subscribe */}
            <div className="col-md-7">
              <div className="email-container rounded-3 p-4 d-flex flex-column flex-sm-row align-items-center gap-4 h-100">
                <input
                  type="email"
                  placeholder="Email"
                  className="footer-input form-control px-3 w-100 w-sm-50 shadow-none"
                />
                <button className="btn footer-subscribe-btn w-100 w-sm-50">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons – Small Screens Only */}
          <div className="d-flex justify-content-center gap-3 d-md-none my-4">
            <Link to="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="social-links" />
            </Link>
            <Link to="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-links" />
            </Link>
            <Link to="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-links" />
            </Link>
          </div>

          {/* Divider */}
          <hr className="my-4 my-md-5" />

          {/* Bottom Row */}
          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start small gap-2 gap-md-5 text-center text-md-start">
            <p className="mb-0 fw-normal">© 2023 Positivus. All Rights Reserved.</p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="fw-light"
              style={{ textDecoration: isLargeScreen ? undefined : 'none' }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;