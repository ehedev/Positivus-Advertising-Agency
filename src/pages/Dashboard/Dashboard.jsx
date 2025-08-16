import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SidebarNav, ScrollToTopButton } from "../../imports/components";
import { FaBars, FaTimes } from "../../imports/global";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSidebarOpen]);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className={`sidebar-container border-end ${isSidebarOpen ? "open" : ""}`}>
        <button
          className="sidebarClose-btn btn d-md-none p-0"
          onClick={handleCloseSidebar}
        >
          <FaTimes className="sidebarClose-icon mt-3 ms-3" size={24} />
        </button>
        <SidebarNav />
      </div>

      {isSidebarOpen && (
        <div className="sidebar-backdrop d-md-none" onClick={handleCloseSidebar}></div>
      )}

      {/* Page Content */}
      <div className="flex-grow-1 p-4">
        <button
          className="sidebarToggle-btn btn d-md-none mb-3"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        <Outlet />
        <ScrollToTopButton />
      </div>
    </div>
  );
}