import React from "react";
import Featuer from "../sections/Feature";
import Instagram from "../sections/Instagram";
function Menu() {
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
            Menu
          </h1>
        </div>
      </div>
      <Featuer />
      <div className="container-fluid menu py-5 px-0">
        <div
          className="mb-5 text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: 700, margin: "auto" }}
        >
          <h5 className="section-title">Our Menu</h5>
          <h1 className="display-3 mb-0">Hands Craft More Than Meals</h1>
        </div>
        <div className="tab-class text-center">
          <ul
            className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <li className="nav-item">
              <a
                className="nav-link rounded-pill text-white active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                Breakfast
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link rounded-pill text-white"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                Launch
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link rounded-pill text-white"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                Dinner
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-0">
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-1.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-2.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-3.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-4.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-5.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-6.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-7.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-8.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade p-0">
              <div className="row g-0">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-2.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-3.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-4.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-5.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-6.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-7.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-8.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-1.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade p-0">
              <div className="row g-0">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-3.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-4.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-5.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-6.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-7.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-8.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-1.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="position-relative">
                    <img className="img-fluid" src="img/menu-2.jpg" alt />
                    <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                      BBQ Chicken
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
    </>
  );
}

export default Menu;
