import React from "react";
import { Link } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};
