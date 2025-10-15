import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="row gx-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="col-lg-3 bg-primary d-none d-lg-block">
          <Link
            to="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 className="m-0 display-4 text-white text-uppercase">Chefer</h1>
          </Link>
        </div>
        <div className="col-lg-9">
          <div className="row gx-0 d-none d-lg-flex bg-dark">
            <div className="col-6 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <i className="fa fa-envelope text-primary me-2" />
                <p className="mb-0">info@example.com</p>
              </div>
            </div>
            <div className="col-6 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center py-2">
                <i className="fa fa-phone-alt text-primary me-2" />
                <p className="mb-0">+012 345 6789</p>
              </div>
            </div>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0 px-lg-5"
            style={{ background: "#111111" }}
          >
            <Link to="/" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary text-uppercase">
                Chefer
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/menu" className="nav-item nav-link">
                  Menu
                </Link>
                <Link to="/team" className="nav-item nav-link">
                  Chefs
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/features" className="dropdown-item">
                      Features
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      Blog Post
                    </Link>
                    <Link to="/testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/404" className="dropdown-item">
                      404 Error
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-none d-lg-flex align-items-center py-2">
                <a
                  className="btn btn-outline-secondary btn-square rounded-circle ms-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-secondary btn-square rounded-circle ms-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-outline-secondary btn-square rounded-circle ms-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;