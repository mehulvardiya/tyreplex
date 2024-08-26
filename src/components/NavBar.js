import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="container">
      <div className="col-12 px-0">
        <div className="row mx-sm-0 align-items-center">
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between">
              {/* Logo */}
              <Link className="navbar-brand" to="/">
                <img
                  src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                  alt="TyrePlex.com"
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar Links */}
              <div
                className="collapse navbar-collapse justify-content-center fw-bolder "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  {/* Car Tyres */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/car-tyres"
                      id="navbarDropdown"
                      role="button"
                    >
                      Car Tyres
                    </Link>
                    <ul className="dropdown-menu dropdown-list pt-sm-2 pt-0 pb-1">
                      <li className="nav-item title d-flex align-items-center">
                        <h3 className="ms-2 fs-6">Popular Car Tyre Brands</h3>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/mrf">
                          MRF Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/ceat">
                          CEAT Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/goodyear">
                          Goodyear Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/apollo">
                          Apollo Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/bridgestone">
                          Bridgestone Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/jk">
                          JK Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/michelin">
                          Michelin Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/allcar">
                          All Car Tyres
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Bike Tyres */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/bike-tyres"
                      id="navbarDropdown"
                      role="button"
                    >
                      Bike Tyres
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li className="nav-item title d-flex align-items-center">
                        <h3 className="ms-2 fs-6">Popular Bike Tyre Brands</h3>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/mrf">
                          MRF Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/ceat">
                          CEAT Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/apollo">
                          Apollo Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/bridgestone">
                          Bridgestone Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/jk">
                          JK Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/pirelli">
                          Pirelli Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          All Car Tyres
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Tyre Pressure */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/tyre-pressure"
                    >
                      Tyre Pressure
                    </Link>
                  </li>

                  {/* Commerical Tyres */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                    >
                      Commerical Tyres
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/commerical-tyres">
                          All Commerical Tyres
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Accessories */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                    >
                      Accessories
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/accessories">
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/batteries">
                          Batteries
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/alloys-wheels">
                          Alloys Wheels
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* More */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                    >
                      More
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/offers-terms-conditions"
                        >
                          CashBack Offer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/tyre-dealers-in-india"
                        >
                          Find Tyres Dealers
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/compare-tyres">
                          Compare Tyres
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/dealer-details">
                          Are you A Tyres Dealer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/wheel-balancing">
                          Wheel Balancing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/wheel-alignment">
                          Wheel Alignment
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* Login Button */}
                <div className="d-flex ">
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href = "//www.tyreplex.com/login")
                        }
                        title="Login"
                        className="nav-link login-icon d-flex align-items-center"
                      >
                        <i className="fa fa-user profileIcon"></i>
                        <p className="mx-1 mb-0 f-12 font-weight-normal">
                          Login
                        </p>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
