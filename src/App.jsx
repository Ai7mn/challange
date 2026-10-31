import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import FAQ from "./pages/FAQ";
import FeaturesPage from "./pages/FeaturesPage";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Preserve links from the original implementation. */}
          <Route path="/Featurs" element={<Navigate replace to="/features" />} />
          <Route
            path="/Testminials"
            element={<Navigate replace to="/testimonials" />}
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
