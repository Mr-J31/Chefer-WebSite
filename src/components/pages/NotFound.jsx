import React from "react";
import Instagram from "../sections/Instagram";

const NotFound = () => {
  return (
    <>
      <div
        className="container-fluid p-0 mb-5"
        style={{ backgroundColor: "#1c1e22" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "250px" }}
        >
          <h1
            style={{
              color: "#d3d3d6",
              fontFamily: "'Emblema One', system-ui, sans-serif",
              fontSize: "110px",
              fontWeight: 700,
              letterSpacing: "3px",
              lineHeight: 1,
              margin: 0,
              textAlign: "center",
            }}
          >
            404 Error
          </h1>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5"
                href="index.html"
              >
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
    </>
  );
};

export default NotFound;
