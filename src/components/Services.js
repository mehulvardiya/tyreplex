import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div
        className="dealer-info-wrapper col-12 dealer-item shadow-box"
        data-dealer_name="SHREE HEMKUNT TYRES AND SERVICES"
      >
        <div className="row">
          {/* <!-- Dealer Information Section --> */}
          <div className="col-sm-5 col-12 dealer-content dealer-info-bg">
            <div className="row d-none d-sm-block">
              <div className="col-12">
                    <h1 className="fw-bold d-flex align-items-center">
                      SHREE HEMKUNT TYRES AND SERVICES
                    <span className="offer-text ms-2 bg-transparent d-inline-flex align-items-center">
                      <span className="verified fa">
                      </span>
                      Verified
                    </span>
                    </h1>  

                <div className="row">
                  <div className="d-flex align-items-center mt-1">
                    <span className="ratingNumber-bg me-2">
                      4.9
                    </span>
                    <ul className="list-inline stars d-inline-block mb-0 d-flex align-items-center top-item-rating mt-1">
                      <li
                        title="Poor"
                        data-dealer-id="23474"
                        data-rating="1"
                        data-value="1"
                        value="1"
                        id="23474_1"
                        className="star selected"
                      >
                        <i
                          id="fa_23474_1"
                          className="fa fa-star fa-fw"
                          style={{
                            "background-image":
                              "url('https://cdn.tyreplex.net/themes/moonlight/images/fontIconSprits.png?v=2385909,tr=q-60')",
                          }}
                        ></i>
                      </li>
                      <li
                        title="Fair"
                        data-dealer-id="23474"
                        data-rating="2"
                        data-value="2"
                        value="2"
                        id="23474_2"
                        className="star selected"
                      >
                        <i
                          id="fa_23474_2"
                          className="fa fa-star fa-fw"
                          style={{
                            "background-image":
                              "url('https://cdn.tyreplex.net/themes/moonlight/images/fontIconSprits.png?v=2385909,tr=q-60')",
                          }}
                        ></i>
                      </li>
                      <li
                        title="Good"
                        data-dealer-id="23474"
                        data-rating="3"
                        data-value="3"
                        value="3"
                        id="23474_3"
                        className="star selected"
                      >
                        <i
                          id="fa_23474_3"
                          className="fa fa-star fa-fw"
                          style={{
                            "background-image":
                              "url('https://cdn.tyreplex.net/themes/moonlight/images/fontIconSprits.png?v=2385909,tr=q-60');",
                          }}
                        ></i>
                      </li>
                      <li
                        title="Excellent"
                        data-dealer-id="23474"
                        data-rating="4"
                        data-value="4"
                        value="4"
                        id="23474_4"
                        className="star selected"
                      >
                        <i
                          id="fa_23474_4"
                          className="fa fa-star fa-fw"
                          style={{
                            "background-image":
                              "url('https://cdn.tyreplex.net/themes/moonlight/images/fontIconSprits.png?v=2385909,tr=q-60');",
                          }}
                        ></i>
                      </li>
                      <li
                        title="WOW!!!"
                        data-dealer-id="23474"
                        data-rating="5"
                        data-value="5"
                        value="5"
                        id="23474_5"
                        className="star selected"
                      >
                        <i
                          id="fa_23474_5"
                          className="fa fa-star fa-fw"
                          style={{
                            "background-image":
                              "url('https://cdn.tyreplex.net/themes/moonlight/images/fontIconSprits.png?v=2385909,tr=q-60');",
                          }}
                        ></i>
                      </li>
                    </ul>
                    <span className="text-link-arrow text-mute ms-2 ">
                      <u>2278 Reviews</u>
                    </span>
                    <button
                      type="button"
                      className="btn px-2 btn-light d-inline-flex rate-btn"
                      onclick="showDealerRater(23474);"
                    >
                      Rate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Location and Operating Hours --> */}
            <div className="row mx-0 align-items-center">
              <div className="col-12 location-bar">
                <div className="row">
                  <div className="col-1 px-0">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div className="col-11">
                    PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA
                    KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2 opening-bar">
                <div className="row">
                  <div className="col-1 px-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div className="col-11 text-start">
                    Open - Monday to Sunday - 10:00AM to 8:00PM
                  </div>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="row">
                  <div className="col-5 text-end pe-0 ps-1">
                    <Link
                      target="_blank"
                      href="https://tyreplex.com/r/df64b"
                      title="Direction"
                      className="btn btn-outline-danger p-2 col-12"
                    >
                      {" "}
                      Get Directions{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Gallery Section --> */}
          <div className="col-sm-7 col-12 blue-bg text-end dealer-info-bg d-none d-sm-block">
            <ul className="custom-carousel" id="dealerGalleryCarousel">
              <li className="gallery-item item">
                <div className="col-12" data-toggle="modal" data-target="#dealerGallery">
                  <Link
                    to="/javascript:void(0);"
                    title=""
                    className="custom-card"
                    data-slide-to="1"
                  >
                    <div className="col-12 gallery_img">
                      <img
                        className="img-fluid lazy dealer_img_1"
                        data-original="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                        src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                        alt="gallery Img"
                      />
                    </div>
                  </Link>
                </div>
              </li>
              <li className="gallery-item item">
                <div data-toggle="modal" data-target="#dealerGallery">
                  <Link
                    to="/javascript:void(0);"
                    title=""
                    className="custom-card"
                    data-slide-to="2"
                  >
                    <div className="col-12 gallery_img">
                    <img class="img-fluid lazy dealer_img_3" data-original="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300" src="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300" alt="gallery Img"/>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="gallery-item item">
                <div className="col-12" data-toggle="modal" data-target="#dealerGallery">
                  <Link
                    to="/javascript:void(0);"
                    title=""
                    className="custom-card"
                    data-slide-to="1"
                  >
                    <div className="col-12 gallery_img">
                      <img
                        className="img-fluid lazy dealer_img_1"
                        data-original="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                        src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                        alt="gallery Img"
                      />
                    </div>
                  </Link>
                </div>
              </li>
              <li className="gallery-item item">
                <div className="col-12" data-toggle="modal" data-target="#dealerGallery">
                  <Link
                    to="/javascript:void(0);"
                    title=""
                    className="custom-card"
                    data-slide-to="1"
                  >
                    <div className="col-12 gallery_img">
                    <img class="img-fluid lazy dealer_img_3" data-original="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300" src="https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300" alt="gallery Img"/>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Review */}
        <div className="col-sm-12" id="googleReviews">
          <div className="row">
            <div className="col-12 reviews-list">
              <p className="fw-bold mb-2">
                <span className="count me-2">2278</span> Google Reviews
              </p>
              <div className="row d-flex all-brands review-wrapper">
                <div className="col-12 slideshow">
                  <Slider {...settings}>
                    <div className="item reviews-items">
                      <div className="col-11 border rounded ">
                        <div className="row">
                          <div className="col-12 d-flex align-items-start row mx-1 text-start text-dark">
                            <p className="mb-0 fw-bold comment-title d-flex align-items-center">
                              <span class="userIcon me-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                  class="rounded-circle my-2"
                                  height="35"
                                  alt="Avatar"
                                  loading="lazy"
                                />
                              </span>
                              Md Nasir
                            </p>
                            <div className="user-comment col-12 px-0">
                              <div className="read-more-comment mt-2">
                                <div className="make_read_more_less_container make_read_less px-3">
                                  <div
                                    className="position-relative text-start"
                                    id="itemComment"
                                  >
                                    Excellent service from start to finish. 100%
                                    satisfaction with the job, professionalism
                                    and overall service. We were delighted with
                                    your courteous, prompt, and professional
                                    service. We would plan to reuse your
                                    services and recommend them to friends and
                                    family. You came to us as a recommendation,
                                    and this proved accurate.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item reviews-items">
                      <div className="col-11 border rounded">
                        <div className="row">
                          <div className="col-12 d-flex align-items-start row mx-1 text-start text-dark">
                            <p className="mb-0 fw-bold comment-title d-flex align-items-center">
                              <span class="userIcon me-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                  class="rounded-circle my-2"
                                  height="35"
                                  alt="Avatar"
                                  loading="lazy"
                                />
                              </span>
                              Rohit Bhati
                            </p>
                            <div className="user-comment col-12 px-0">
                              <div className="read-more-comment mt-2">
                                <div className="make_read_more_less_container make_read_less px-3">
                                  <div
                                    className="position-relative text-start"
                                    id="itemComment"
                                  >
                                    Went for Tyre change. Ultimate service by
                                    shoppe boys. Owner behavior very cool. Guide
                                    as per your budget. Highly recommend.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item reviews-items">
                      <div className="col-11 border  rounded ">
                        <div className="row">
                          <div className="col-12 d-flex align-items-start row mx-1 text-start text-dark">
                            <p className="mb-0 fw-bold comment-title d-flex align-items-center">
                              <span class="userIcon me-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                                  class="rounded-circle my-2"
                                  height="35"
                                  alt="Avatar"
                                  loading="lazy"
                                />
                              </span>
                              Pradeep Kumar
                            </p>
                            <div className="user-comment col-12 px-0">
                              <div className="read-more-comment mt-2">
                                <div className="make_read_more_less_container make_read_less px-3">
                                  <div
                                    className="position-relative text-start"
                                    id="itemComment"
                                  >
                                    Best tyre shop in Indirapuram. Good dealing
                                    with customers. All types of tyres are
                                    available here. Price is also reasonable.
                                    Overall good experience.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item reviews-items">
                      <div className="col-11 border rounded">
                        <div className="row">
                          <div className="col-12 d-flex align-items-start row mx-1 text-start text-dark">
                            <p className="mb-0 fw-bold comment-title d-flex align-items-center">
                              <span class="userIcon me-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                  class="rounded-circle my-2"
                                  height="35"
                                  alt="Avatar"
                                  loading="lazy"
                                />
                              </span>
                              Surjit Kumar
                            </p>
                            <div className="user-comment col-12 px-0">
                              <div className="read-more-comment mt-2">
                                <div className="make_read_more_less_container make_read_less px-3">
                                  <div
                                    className="position-relative text-start"
                                    id="itemComment"
                                  >
                                    Genuine and Authorized Tyre shop in
                                    indirapuram having latest manufactured
                                    stock. Well equipped workshop with
                                    professional staff. I change my care Tyre
                                    there, highly satisfied with service and
                                    lasted available stock.. Keep it up !!!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
