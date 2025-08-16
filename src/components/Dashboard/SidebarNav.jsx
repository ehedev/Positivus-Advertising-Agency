import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function SidebarNav({ handleCloseSidebar }) {
  const links = [
    { path: "general-settings", label: "General Settings" },
    { path: "services", label: "Services" }
  ];
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button
        className="backHome-button btn btn-secondary mt-3 ms-3"
        onClick={() => {
          handleCloseSidebar();
          navigate("/");
        }}
      >
        ← Back to Home
      </button>
      <div className="sidebar-header mb-3">
        <div className="sidebar-title">Dashboard</div>
        <div className="sidebar-subTitle">Positivus</div>
        <div className="sidebar-dashboardTitle">Advertising Agency</div>
      </div>

      <nav className="nav flex-column">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => handleCloseSidebar()}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}