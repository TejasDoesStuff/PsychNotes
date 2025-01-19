import React from "react";

//PSYCH
import Unit1 from "./APPsych/unit1";
import Unit3 from "./APPsych/unit3";
import Unit4 from "./APPsych/unit4";

//LANG
import Ethics from "./APLang/ethics";
import People from "./APLang/people";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen text-black">
      <Router>
        <Routes>
          {/* Psych */}
          <Route path="/psych/unit1" element={<Unit1 />} />
          <Route path="/psych/unit3" element={<Unit3 />} />
          <Route path="/psych/unit4" element={<Unit4 />} />

          {/* Lang */}
          <Route path="/lang/ethics" element={<Ethics />} />
          <Route path="/lang/people" element={<People />} />
        </Routes>
      </Router>
    </div>
  );
}
