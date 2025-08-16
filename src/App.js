import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard/Dashboard";
import GeneralSettings from "./pages/Dashboard/GeneralSettings";
import Services from "./pages/Dashboard/Services";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main home page */}
        <Route path="/" element={<Home />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="general-settings" replace />} />
          <Route path="general-settings" element={<GeneralSettings />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;