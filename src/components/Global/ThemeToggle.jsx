import React from "react";
import { FontAwesomeIcon, faMoon } from '../../imports/global';
import { useTheme } from "../../context/ThemeContext";

// === Main Button Toggle ===
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" 
        ? <FontAwesomeIcon icon={faMoon} className="darkMode-icon" /> 
        : <span className="lightMode-icon">☀️</span>}
    </button>
  );
};

// === Switch Version ===
export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider">
        {theme === "light" ? (
          <span className="switch-icon switch-darkIcon">🌙</span>
        ) : (
          <span className="switch-icon switch-lightIcon">☀️</span>
        )}
      </span>
    </label>
  );
};