import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

import { AnimatePresence } from "framer-motion";
import BrowseProducts from "./BrowseProducts";
import Product from "./Product";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/browse" element={<BrowseProducts />} />
        <Route path="/products/browse/:slug" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
