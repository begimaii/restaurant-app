import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  // Login,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Router>
      <Navbar />
      {/* <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Header />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </div> */}
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </Router>
  </div>
);

export default App;
