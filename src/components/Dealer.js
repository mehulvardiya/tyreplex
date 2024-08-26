import React from "react";

const Dealer = () => {
  return (
    <div className="container">
      <div class="col-12 wheel-alignement-wrap shadow-box">
        <h2 class="fw-bold mb-3">Services offered by this dealer</h2>
        <ul class="custom-carousel mb-0 d-flex justify-content-start">
          <li class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 item">
            <div class="col-sm-12 text-center custom-card">
              <img
                class="img-fluid lazy"
                data-original="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                alt=""
                width="100"
                height="100"
              />
              <h2 class="my-3 fw-bold col-12">Wheel Balancing</h2>
              <a
                href="//www.tyreplex.com/wheel-balancing?add=1"
                data-dealer_id="23474"
                class="btn theme-btn book_now_balancing"
                data-capture="event"
                data-cat="Wheel Balancing"
                data-act="Click"
                data-lbl="Book Now"
              >
                Book Now
              </a>
            </div>
          </li>
          <li class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 item me-0">
            <div class="col-sm-12 text-center custom-card">
              <img
                class="img-fluid lazy"
                data-original="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
                src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
                alt=""
                width="100"
                height="100"
              />
              <h2 class="my-3 fw-bold col-12">Wheel Alignment</h2>
              <a
                href="//www.tyreplex.com/wheel-alignment?add=1"
                data-dealer_id="23474"
                class="btn theme-btn book_now_alignment"
                data-capture="event"
                data-cat="Wheel Alignment"
                data-act="Click"
                data-lbl="Book Now"
              >
                Book Now
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dealer;
