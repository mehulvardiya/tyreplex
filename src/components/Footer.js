import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container root-footer ">
      <div className="row mx-sm-0 bg-white pt-3">
        <div className="col-12 social-link">
          <div className="row">
            <div className="footer-left col-md-2 col-12 col-sm-3">
              <img
                className="img-fluid footer-logo lazy"
                width="92"
                height="22"
                data-original="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
                title="TyrePlex"
                alt="TyrePlex"
              />
              <ul className="nav social-icons">
                <li>
                  <button
                    type="button"
                    onclick="window.location.href='https://www.facebook.com/tyreplex'"
                    title="Facebook"
                    className="border-0 bg-transparent p-0"
                  >
                    <img
                      className="img-fluid lazy"
                      width="15"
                      height="22"
                      data-original="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&tr=w-24,q-40"
                      alt="Facebook"
                      src="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&tr=w-24,q-40"
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onclick="window.location.href='https://www.instagram.com/ontyreplex'"
                    title="Instagram"
                    className="border-0 bg-transparent p-0"
                  >
                    <img
                      className="img-fluid lazy"
                      width="23"
                      height="22"
                      data-original="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&tr=w-24,q-40"
                      alt="Instagram"
                      src="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&tr=w-24,q-40"
                    />
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-links footer-widget footer-right col-md-8 col-12 col-sm-9 ms-md-auto ms-sm-auto">
              <div className="row">
                <div className="col-sm-4 col-12">
                  <ul className="flex-column mb-0">
                    <li className="nav-item">
                      <Link
                        to="/javascript:void(0);"
                        data-url="//www.tyreplex.com/about-us"
                        className="footer-link redirectonclick"
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/javascript:void(0);"
                        data-url="//www.tyreplex.com/dealer-details"
                        className="footer-link redirectonclick"
                      >
                        Are you a Tyre Dealer?
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-12">
                  <ul className="flex-column mb-0">
                    <li className="nav-item">
                      <Link
                        to="/javascript:void(0);"
                        data-url="//www.tyreplex.com/privacy-policy"
                        className="footer-link redirectonclick"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/javascript:void(0);"
                        data-url="//www.tyreplex.com/terms-of-use"
                        className="footer-link redirectonclick"
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-12">
                  <ul className="flex-column mb-0">
                    <li>
                      <Link to="//www.tyreplex.com/contact" title="Contact Us">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/javascript:void(0);"
                        data-url="//www.tyreplex.com/career"
                        className="footer-link redirectonclick"
                      >
                        Career
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/javascript:void(0);"
                        data-url="//www.tyreplex.com/shipping-return-policy"
                        className="footer-link redirectonclick"
                      >
                        Shipping & Return Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-sm-flex col-12 border-top py-3 align-items-center">
          <div className="text-center footer-widget copyright-text order-sm-1 order-2 col-sm-12">
            <p className="mb-0">
              ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>

        <div className="col-12 d-md-none d-block">
          <div className="share-group socialShare">
            <ul className="share-dropdown">
              <li className="d-sm-none d-flex">
                <h2 className="fw-bold me-auto">Share this product</h2>
                <button type="button" className="close ms-auto share-close">
                  ×
                </button>
              </li>
              <li>
                <Link
                  data-original-title="whatsapp"
                  target="_blank"
                  className="btn btn-whatsapp m-0"
                  href="https://wa.me/?l=en&phone=&text=SHREE%20HEMKUNT%20TYRES%20AND%20SERVICES%2C%20Tyre%20dealer%20situated%20in%20Ghaziabad%0Ahttps%3A%2F%2Fwww.tyreplex.com%2Ftyre-dealers-in-india%2Fshree-hemkunt-tyres-and-services"
                >
                  <i className="fa fa-whatsapp"></i>
                  <span className="d-sm-none ms-2">Whatsapp</span>
                </Link>
              </li>
              <li>
                <Link
                  data-original-title="Facebook"
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?_encoding=UTF8&display=popup&u=https%3A%2F%2Fwww.tyreplex.com%2Ftyre-dealers-in-india%2Fshree-hemkunt-tyres-and-services"
                  className="btn btn-facebook m-0"
                >
                  <i className="fa fa-facebook"></i>
                  <span className="d-sm-none ms-2">Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  data-original-title="twitter"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=SHREE%20HEMKUNT%20TYRES%20AND%20SERVICES%2C%20Tyre%20dealer%20situated%20in%20Ghaziabad%0Ahttps%3A%2F%2Fwww.tyreplex.com%2Ftyre-dealers-in-india%2Fshree-hemkunt-tyres-and-services"
                  className="btn btn-twitter m-0"
                >
                  <i className="fa fa-twitter"></i>
                  <span className="d-sm-none ms-2">Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  data-original-title="copy"
                  onclick="copyToClipboard();"
                  href="/javascript:void(0);"
                  className="btn btn-copy m-0"
                >
                  <i className="fa fa-copy"></i>
                  <span className="d-sm-none ms-2">Copy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
