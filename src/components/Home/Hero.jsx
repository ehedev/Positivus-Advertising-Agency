import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { heroLightImage, heroDarkImage } from "../../imports/assets";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section className="hero-section mt-2 mt-lg-5">
      <Container>
        <Row className="align-items-center">
          {/* Mobile Title */}
          <Col xs={12} className="order-1 d-block d-lg-none text-start mb-3">
            <h1 className="hero-title fw-medium display-2">
              Navigating the
              <br />
              digital landscape
              <br />
              for success
            </h1>
          </Col>

          {/* Hero Image */}
          <Col xs={12} lg={6} className="order-2 text-center">
            <img
              src={theme === "light" ? heroLightImage : heroDarkImage}
              alt="Illustration of digital marketing growth and success"
              className="hero-image img-fluid mx-auto"
            />
          </Col>

          {/* Text + Button (includes desktop title) */}
          <Col xs={12} lg={6} className="order-3 order-lg-1 text-start mt-2 mt-lg-0">
            {/* Desktop-only title */}
            <h1 className="hero-title fw-medium display-4 d-none d-lg-block">
              Navigating the
              <br />
              digital landscape
              <br />
              for success
            </h1>

            <p className="hero-description mt-3">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social media
              marketing, and content creation.
            </p>

            <Button 
              variant="dark" 
              className="hero-button custom-button mt-3"
              href="#footer"
            >
              Book a consultation
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;