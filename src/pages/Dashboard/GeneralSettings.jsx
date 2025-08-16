import React from "react";
import { ThemeSwitch } from "../../imports/components";
import { useTheme } from "../../context/ThemeContext";

export default function GeneralSettings() {
  const { theme } = useTheme();

  return (
    <div>
      <h2 className="mb-4">General Settings</h2>
      <div className="theme-toggle-dashboard position-relative d-flex align-items-center gap-3 ms-3">
        <h6 className="general-feature m-0">Dark Theme Mode</h6>
        <ThemeSwitch />
        <h6 className="feature-on-off m-0">
          {theme === "dark" ? "ON" : "OFF"}
        </h6>
      </div>
    </div>
  );
}