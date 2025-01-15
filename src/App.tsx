import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className="dash">
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
