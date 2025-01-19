import React from "react";
import Unit1 from "./unit1";
import Unit3 from "./unit3";
import Unit4 from "./unit4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen text-black">
      <Router>
        <Routes>
          <Route path="/unit1" element={<Unit1 />} />
          <Route path="/unit3" element={<Unit3 />} />
          <Route path="/unit4" element={<Unit4 />} />
        </Routes>
      </Router>
    </div>
  );
}
