import React from "react";

function Spinner({ fadeOut }) {
  return (
    <div
      id="spinner"
      className={`show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${
        fadeOut ? "fade-out" : ""
      }`}
      style={{
        transition: "opacity 0.8s ease, visibility 0.8s ease",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
        zIndex: 9999,
        backgroundColor: "#d3d3d6", 
      }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      />
    </div>
  );
}

export default Spinner;
