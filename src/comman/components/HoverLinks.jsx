// HoverLink.js
import React from "react";
import { Link } from "react-router-dom";

const HoverLink = ({ to, children, style }) => {
  return (
    <Link
      to={to}
      style={{ ...style, textDecoration: "none" }}
      onMouseEnter={(e) => (e.target.style.color = "#0078c8")}
      onMouseLeave={(e) => (e.target.style.color = "black")}
    >
      {children}
    </Link>
  );
};

export default HoverLink;
