import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
// import Contact from './Contact';
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Login />} />
        {/* <Redirect to="/" /> */}
      </Routes>
    </>
  );
};
export default App;
