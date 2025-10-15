import React from "react";
import Instgram from "../sections/Instagram";
function BlogPage() {
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
            Blog
          </h1>
        </div>
      </div>
      <div className="container-fluid p-5">
        <div
          className="mb-5 text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: 700, margin: "auto" }}
        >
          <h5 className="section-title">Our Blog</h5>
          <h1 className="display-3 mb-0">Latest Articles From Food Blog</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="blog-item">
              <div className="position-relative overflow-hidden rounded-top">
                <img className="img-fluid" src="img/menu-3.jpg" alt />
              </div>
              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                  <span>01</span>
                  <h6 className="text-primary text-uppercase mb-0">January</h6>
                  <span>2045</span>
                </div>
                <a className="h5 lh-base text-light" href>
                  Sed amet tempor amet sit kasd sea lorem
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="blog-item">
              <div className="position-relative overflow-hidden rounded-top">
                <img className="img-fluid" src="img/menu-5.jpg" alt />
              </div>
              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                  <span>01</span>
                  <h6 className="text-primary text-uppercase mb-0">January</h6>
                  <span>2045</span>
                </div>
                <a className="h5 lh-base text-light" href>
                  Sed amet tempor amet sit kasd sea lorem
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="blog-item">
              <div className="position-relative overflow-hidden rounded-top">
                <img className="img-fluid" src="img/menu-7.jpg" alt />
              </div>
              <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                  <span>01</span>
                  <h6 className="text-primary text-uppercase mb-0">January</h6>
                  <span>2045</span>
                </div>
                <a className="h5 lh-base text-light" href>
                  Sed amet tempor amet sit kasd sea lorem
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instgram />
    </>
  );
}

export default BlogPage;
