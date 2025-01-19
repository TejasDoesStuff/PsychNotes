import React from "react";
import SensePerception from "./senseperception";
import BioPsych from "./biopsych";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen text-black">
      <Router>
        <Routes>
          <Route path="/senseperception" element={<SensePerception />} />
          <Route path="/biopsych" element={<BioPsych />} />
        </Routes>
      </Router>
    </div>
  );
}