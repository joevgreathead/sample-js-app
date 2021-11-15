import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Blog, Home } from "./views";
import { AppRoutes } from "./app-routes";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
