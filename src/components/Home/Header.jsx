import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "../../imports/global";
import { Link } from "react-router-dom";
import { blackLogo, whiteLogo } from "../../imports/assets";
import { useTheme } from "../../context/ThemeContext";
import { ThemeToggle } from "../../imports/components";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="header py-3"
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        {/* Logo + Brand Name */}
        <Navbar.Brand
          href="/"
          className="header-brandName d-flex fs-3 fw-medium align-items-center gap-2"
        >
          <img
            src={theme === "light" ? blackLogo : whiteLogo}
            alt="Positivus Logo" 
            className="header-logo" />
          Positivus
        </Navbar.Brand>

        {/* Toggle Button + ThemeToggle (only visible on small/medium screens) */}
        <div className="theme-toggle-mobile d-flex align-items-center gap-2 d-lg-none">
          <ThemeToggle /> {/* theme button */}
          <Navbar.Toggle aria-controls="main-navbar" className="border-0 shadow-none">
            {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Navbar.Toggle>
        </div>

        {/* Navigation Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto d-flex align-items-lg-center gap-lg-4">
            <Nav.Link href="#" onClick={(e) => e.preventDefault()}>About us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#caseStudies">Use Cases</Nav.Link>
            <Nav.Link href="#" onClick={(e) => e.preventDefault()}>Pricing</Nav.Link>
            <Nav.Link href="#" onClick={(e) => e.preventDefault()}>Blog</Nav.Link>

            {/* Dashboard Button */}
            <Link
              to="/dashboard"
              className="header-dashboard-btn custom-button mt-3 mt-lg-0 py-2 px-3"
            >
              Dashboard
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;