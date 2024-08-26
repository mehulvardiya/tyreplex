import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Tyres = () => {
  useEffect(() => {
    const advanceFilterButton = document.getElementById("advanceFilter");
    const filterContent = document.getElementById("advanceFilterContent");
    const vehicleTypeOption = document.getElementById("vehicleTypeOption");

    if (advanceFilterButton) {
      advanceFilterButton.addEventListener("click", () => {
        if (
          (filterContent.style.display === "none" ||
          filterContent.style.display === "" ) && (vehicleTypeOption.style.display === "none"||vehicleTypeOption.style.display === "")
        ) {
          filterContent.style.display = "block";
          vehicleTypeOption.style.display = "block";
          // Show all filter options
          document
            .querySelectorAll("#advanceFilterContent .d-none")
            .forEach((el) => el.classList.remove("d-none"));
        } else {
          filterContent.style.display = "none";
          vehicleTypeOption.style.display = "none";
          // Hide all filter options
          document
            .querySelectorAll("#advanceFilterContent .form-control")
            .forEach((el) => el.classList.add("d-none"));
        }
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      if (advanceFilterButton) {
        advanceFilterButton.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className="container">
      <div
        className="col-12 product-listing"
        id="product_listing_filter_model_page"
      >
        <div className="col-12">
          <h2 className="fw-bold mb-0 mt-3 mb-2">Tyres sold by this Dealer</h2>
          <div className="row align-items-center mx-0 mb-2">
            <div className="col-12 col-sm-6 total-product-result px-0 mb-2 mb-sm-0 d-none">
              <p className="fw-bold mb-0 fs-5" style={{ display: "none" }}>
                <span className="filter_total_count">8809</span> Tyre(s) found
                for
              </p>
            </div>
            <div
              className="col-12 col-sm-6 sortBy-filter ms-auto px-0 bottom-filter"
              id="filter_wrapper"
            >
              <div className="backdrop"></div>
              <div className="row d-flex justify-content-between">
                <div className="col col-sm-4 sortBy ms-sm-auto">
                  <div className="row">
                    <button type="button" className="btn col-12 px-0">
                      <i className="fa fa-filter me-2"></i>Filter By
                    </button>
                    <div className="sortBy-brand col-12 pt-0">
                      <select
                        className="form-control sortBy_brand"
                        name="sortBy_brand"
                        id="sortBy_brand"
                      >
                        <option value="" selected="selected">
                          Filter By
                        </option>
                        <option
                          value="apollo"
                          data-tm="apollo"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Apollo
                        </option>
                        <option
                          value="bedrock"
                          data-tm="bedrock"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          BEDROCK
                        </option>
                        <option
                          value="birla"
                          data-tm="birla"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Birla
                        </option>
                        <option
                          value="bridgestone"
                          data-tm="bridgestone"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Bridgestone
                        </option>
                        <option
                          value="ceat"
                          data-tm="ceat"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          CEAT
                        </option>
                        <option
                          value="continental"
                          data-tm="continental"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Continental
                        </option>
                        <option
                          value="dunlop"
                          data-tm="dunlop"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          DUNLOP
                        </option>
                        <option
                          value="falken"
                          data-tm="falken"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Falken
                        </option>
                        <option
                          value="firestone"
                          data-tm="firestone"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Firestone
                        </option>
                        <option
                          value="goodyear"
                          data-tm="goodyear"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Goodyear
                        </option>
                        <option
                          value="hankook"
                          data-tm="hankook"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Hankook
                        </option>
                        <option
                          value="jinyu"
                          data-tm="jinyu"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          JINYU
                        </option>
                        <option
                          value="jk"
                          data-tm="jk"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          JK Tyre
                        </option>
                        <option
                          value="kelly"
                          data-tm="kelly"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Kelly
                        </option>
                        <option
                          value="kenda"
                          data-tm="kenda"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Kenda
                        </option>
                        <option
                          value="kumho"
                          data-tm="kumho"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Kumho
                        </option>
                        <option
                          value="landsail"
                          data-tm="landsail"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          LandSail
                        </option>
                        <option
                          value="linglong"
                          data-tm="linglong"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          LINGLONG
                        </option>
                        <option
                          value="maruti"
                          data-tm="maruti"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Maruti
                        </option>
                        <option
                          value="maxxis"
                          data-tm="maxxis"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Maxxis
                        </option>
                        <option
                          value="metro"
                          data-tm="metro"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Metro
                        </option>
                        <option
                          value="metzeler"
                          data-tm="metzeler"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Metzeler
                        </option>
                        <option
                          value="michelin"
                          data-tm="michelin"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Michelin
                        </option>
                        <option
                          value="mirage"
                          data-tm="mirage"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Mirage
                        </option>
                        <option
                          value="mrf"
                          data-tm="mrf"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          MRF
                        </option>
                        <option
                          value="mrl"
                          data-tm="mrl"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          MRL
                        </option>
                        <option
                          value="nexen"
                          data-tm="nexen"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Nexen
                        </option>
                        <option
                          value="pirelli"
                          data-tm="pirelli"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Pirelli
                        </option>
                        <option
                          value="ralco"
                          data-tm="ralco"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Ralco
                        </option>
                        <option
                          value="ralson"
                          data-tm="ralson"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          RALSON
                        </option>
                        <option
                          value="tvs"
                          data-tm="tvs"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          TVS Eurogrip
                        </option>
                        <option
                          value="ultramile"
                          data-tm="ultramile"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Ultramile
                        </option>
                        <option
                          value="vk"
                          data-tm="vk"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          VK TYRE
                        </option>
                        <option
                          value="vredestein"
                          data-tm="vredestein"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Vredestein
                        </option>
                        <option
                          value="yokohama"
                          data-tm="yokohama"
                          data-dealer_id="23474"
                          data-filter=""
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Yokohama
                        </option>
                      </select>
                      <div className="row filter-mbl">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12 d-flex align-items-center border-bottom">
                              <h2 className="fw-bold me-auto mb-0">Filters</h2>
                              <button
                                type="button"
                                className="btn border-0 ms-auto theme-text px-0 clear_filter_make"
                              >
                                Clear all
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-4 px-0 filter-tabs">
                              <div
                                className="nav flex-column nav-pills bg-light-grey"
                                id="filterTab"
                                role="tablist"
                                aria-orientation="vertical"
                              >
                                <Link
                                  className="nav-link active"
                                  id="v-pills-home-tab"
                                  data-toggle="pill"
                                  to="/#v-pills-home"
                                  role="tab"
                                  aria-controls="v-pills-home"
                                  aria-selected="true"
                                >
                                  Tyre Brand
                                </Link>
                              </div>
                            </div>
                            <div className="col-8">
                              <div
                                className="tab-content"
                                id="filter-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="v-pills-home"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-home-tab"
                                >
                                  <div className="row">
                                    <div className="col-12">
                                      <form className="mobile_filter_list">
                                        <input
                                          type="hidden"
                                          className="mobile_filter_values_list"
                                          name="mobile_filter_values_list"
                                        />
                                        <ul className="nav row">
                                          <li
                                            className="nav-item col-12"
                                            data-slug="apollo"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Apollo
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="bedrock"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              BEDROCK
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="birla"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Birla
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="bridgestone"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Bridgestone
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="ceat"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              CEAT
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="continental"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Continental
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="dunlop"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              DUNLOP
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="falken"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Falken
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="firestone"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Firestone
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="goodyear"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Goodyear
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="hankook"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Hankook
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="jinyu"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              JINYU
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="jk"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              JK Tyre
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="kelly"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Kelly
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="kenda"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Kenda
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="kumho"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Kumho
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="landsail"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              LandSail
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="linglong"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              LINGLONG
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="maruti"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Maruti
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="maxxis"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Maxxis
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="metro"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Metro
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="metzeler"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Metzeler
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="michelin"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Michelin
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="mirage"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Mirage
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="mrf"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              MRF
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="mrl"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              MRL
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="nexen"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Nexen
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="pirelli"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Pirelli
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="ralco"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Ralco
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="ralson"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              RALSON
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="tvs"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              TVS Eurogrip
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="ultramile"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Ultramile
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="vk"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              VK TYRE
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="vredestein"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Vredestein
                                            </label>
                                          </li>
                                          <li
                                            className="nav-item col-12"
                                            data-slug="yokohama"
                                          >
                                            <label
                                              className="btn p-0 d-flex"
                                              data-toggle="buttons"
                                            >
                                              <span className="checkBoxAllow fas fa-check"></span>
                                              <span className="nonCheckBoxAllow fas fa-times"></span>
                                              Yokohama
                                            </label>
                                          </li>
                                        </ul>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="v-pills-profile"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-profile-tab"
                                >
                                  Second
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="v-pills-messages"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-messages-tab"
                                >
                                  Third
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="v-pills-settings"
                                  role="tabpanel"
                                  aria-labelledby="v-pills-settings-tab"
                                >
                                  Four
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex align-items-center border-top fixed-bottom bg-white">
                              <div className="row col-12 px-0 mx-0">
                                <button
                                  type="button"
                                  className="btn border-0 px-0 col-6 m-0"
                                  id="closeFilter"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn border-0 theme-text px-0 col-6 m-0 apply_filter_make"
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-4 filter">
                  <div className="row">
                    <button type="button" className="btn col-12 px-0">
                      <i className="fa fa-sort-amount-up me-2"></i>Sort By
                    </button>
                    <div className="filterBy-option col-12">
                      <select
                        className="form-control filterBy_option"
                        name="filterBy_option"
                        id="filterBy_option"
                      >
                        <option
                          selected=""
                          value="popular"
                          data-filter="popular"
                          data-tm=""
                          data-dealer_id="23474"
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Most Popular
                        </option>
                        <option
                          value="high_to_low"
                          data-filter="high_to_low"
                          data-tm=""
                          data-dealer_id="23474"
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Price High to Low
                        </option>
                        <option
                          value="low_to_high"
                          data-filter="low_to_high"
                          data-tm=""
                          data-dealer_id="23474"
                          data-type="dealer_page"
                          data-vt=""
                          data-m=""
                          data-vv=""
                          data-vm=""
                          data-vmm=""
                          data-tt=""
                          data-t="8809"
                          data-p="1"
                        >
                          Price Low to High
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="col-5 col-sm-auto advance-filter px-0 px-sm-3">
                  <button
                    type="button"
                    className="btn btn-link m-0 d-flex align-items-center"
                    id="advanceFilter"
                  >
                    Advanced <i className="fa fa-angle-down"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12" id="advanceFilterContent">
              <div className="row align-items-center mt-sm-3">
                <div className="col-12">
                  <h2 className="col-12 d-sm-none">Advance Filter</h2>
                  <form className="row" method="" action="" id="vehicleNumber">
                    <div className="col-12 py-sm-2">
                      <div
                        className="row justify-content-end"
                        id="chooseVehicleType"
                      >
                        <span className="col-sm-2 col-12 px-sm-2 d-flex mb-2 mb-sm-0">
                          <input
                            type="text"
                            className="form-control m-0 py-2 searchVehicleNumber"
                            placeholder="For Ex: DL01AB1111"
                            aria-label="VehicleNumber"
                            aria-describedby="basic-addon1"
                            maxlength="12"
                          />
                          <button
                            type="button"
                            className="btn theme-btn vehicleTypeSearch vehicle_number_dealer_page_submit_btn px-0 my-0 py-0 align-items-center col-sm-auto col-2 col-sm-3 d-flex justify-content-center d-none"
                          >
                            <span className="after-icon fa"></span>
                          </button>
                        </span>
                        {/* <!-- Vehicle Type --> */}
                        <div
                          className="col-sm-auto col-12 d-sm-flex justify-content-end px-sm-0"
                          id="vehicleTypeOption"
                        >
                          <span
                            className="bg-transparent border-0 col-sm-auto col-12 px-sm-2 px-0 d-sm-inline-block d-block mb-2 mb-sm-0"
                            id="select_vehicle_type"
                          >
                            <select
                              className="form-control vehicle-type"
                              id="vehicle-type-dealer-page"
                              name="vehicle-type"
                              placeholder="Select Vehicle Type"
                            >
                              <option value="">Select Vehicle Type</option>
                              <option value="car">
                                <span className="vehicle-car-icon"></span>
                                <span>Car</span>
                              </option>
                              <option value="bike">
                                <span className="vehicle-bike-icon"></span>
                                <span>Bike</span>
                              </option>
                              <option value="scooter">
                                <span className="vehicle-bike-icon"></span>
                                <span>Scooter</span>
                              </option>
                            </select>
                          </span>

                          {/* <!-- Choose Brand --> */}
                          <div className="col-sm-auto col-12 mb-2 px-sm-2 d-none mb-sm-0 px-0">
                            <select
                              className="form-control home-page-vehicle-make"
                              id="home-page-vehicle-make"
                              name="home-page-vehicle-make"
                              placeholder="Choose Brand"
                            >
                              <option value="">Choose Brand</option>
                              <optgroup label="Popular">
                                <option value="maruti@@car">
                                  Maruti Suzuki
                                </option>
                                <option value="mg@@car">MG</option>
                                <option value="hyundai@@car">Hyundai</option>
                                <option value="honda@@car">Honda</option>
                                <option value="toyota@@car">Toyota</option>
                                <option value="mahindra@@car">Mahindra</option>
                                <option value="tata@@car">Tata</option>
                                <option value="kia@@car">KIA</option>
                                <option value="jeep@@car">Jeep</option>
                                <option value="Volkswagen@@car">
                                  Volkswagen
                                </option>
                                <option value="ford@@car">Ford</option>
                                <option value="renault@@car">Renault</option>
                                <option value="bmw@@car">BMW</option>
                                <option value="Audi@@car">Audi</option>
                                <option value="Mercedes-Benz@@car">
                                  Mercedes-Benz
                                </option>
                                <option value="Skoda@@car">Skoda</option>
                                <option value="datsun@@car">Datsun</option>
                                <option value="Mitsubishi@@car">
                                  Mitsubishi
                                </option>
                                <option value="Volvo@@car">Volvo</option>
                                <option value="nissan@@car">Nissan</option>
                                <option value="Fiat@@car">Fiat</option>
                                <option value="Jaguar@@car">Jaguar</option>
                                <option value="lamborghini@@car">
                                  Lamborghini
                                </option>
                                <option value="Rolls-Royce@@car">
                                  Rolls-Royce
                                </option>
                                <option value="Mini@@car">Mini</option>
                                <option value="Bugatti@@car">Bugatti</option>
                                <option value="porsche@@car">Porsche</option>
                                <option value="Aston-Martin@@car">
                                  Aston Martin
                                </option>
                                <option value="Ferrari@@car">Ferrari</option>
                                <option value="Land-Rover@@car">
                                  Land Rover
                                </option>
                                <option value="maserati@@car">Maserati</option>
                                <option value="Bentley@@car">Bentley</option>
                                <option value="Isuzu@@car">Isuzu</option>
                                <option value="force@@car">Force</option>
                                <option value="bajaj@@car">Bajaj</option>
                                <option value="dc@@car">DC</option>
                                <option value="Lexus@@car">Lexus</option>
                                <option value="Premier@@car">Premier</option>
                                <option value="chevrolet@@car">
                                  Chevrolet
                                </option>
                                <option value="citroen@@car">Citroen</option>
                              </optgroup>
                              <optgroup label="Others">
                                <option value="mclaren@@car">Mclaren</option>
                                <option value="fisker@@car">Fisker</option>
                                <option value="Opel@@car">Opel</option>
                                <option value="abarth@@car">Abarth</option>
                                <option value="pravaig@@car">Pravaig</option>
                                <option value="reva@@car">Reva</option>
                                <option value="strom-motors@@car">
                                  Strom Motors
                                </option>
                                <option value="byd-auto@@car">BYD Auto</option>
                                <option value="Mahindra-Ssangyong@@car">
                                  Mahindra SsangYong
                                </option>
                                <option value="pmv@@car">PMV</option>
                                <option value="icml@@car">ICML</option>
                                <option value="ashok-leyland@@car">
                                  Ashok Leyland
                                </option>
                                <option value="Mahindra-Renault@@car">
                                  Mahindra Renault
                                </option>
                              </optgroup>
                            </select>
                          </div>
                          {/* <!-- Choose Model --> */}
                          <div className="col-sm-auto col-12 mb-2 px-sm-2 d-none mb-sm-0 px-0">
                            <select
                              className="form-control home-page-vehicle-model"
                              id="home-page-vehicle-model"
                              name="home-page-vehicle-model"
                              placeholder="Choose Model"
                            >
                              <option value="">Choose Model</option>
                            </select>
                          </div>
                          {/* <!-- Choose Variant --> */}
                          <div className="col-sm-auto col-12 mb-2 px-sm-2 d-none mb-sm-0 px-0">
                            <select
                              className="form-control home-page-vehicle-variant"
                              id="home-page-vehicle-variant"
                              name="home-page-vehicle-variant"
                              placeholder="Choose Variant"
                            >
                              <option value="">Choose Variant</option>
                            </select>
                          </div>
                          {/* <!-- Search Button --> */}
                          <div className="col-sm-auto col-12 mb-2 d-none mb-sm-0 px-sm-2 px-0">
                            <Link
                              data-capture="event"
                              data-cat="Tyre Dealer Individual"
                              data-act="Click"
                              data-lbl="Vehicle Search Widget Submit"
                              to="/javascript:void(0);"
                              onsubmit="return false;"
                              className="btn theme-btn mx-auto col-sm-12 m-0 col-12"
                            >
                              <button
                                type="button"
                                className="btn theme-btn vehicleTypeSearch search_by_vehicle_dealer_page_submit_btn p-0 m-0 align-items-center d-flex justify-content-center col-12"
                              >
                                <span className="after-icon d-none d-sm-block fa"></span>
                                <span className="d-sm-none">Search</span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <input
                  type="hidden"
                  name="filter_by_data_input_field"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="col-12" id="seletedFilterOption">
            <input type="hidden" name="filter_ids[]" id="filter_ids" />
            <ul className="nav d-flex align-items-center selected-filter mt-3 filter_show_tags"></ul>
          </div>
        </div>
        <input
          type="text"
          id="quantity"
          name="quantity"
          className="form-control input-number text-center d-none"
          value="1"
          min="1"
          max="10"
          readonly=""
        />

        {/* Card Items */}
        <ul className="nav row all_records_container rec-rows-cont vehicle-modal-wrapper rating-product newProductWrapper">
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2173"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="145-80-r-12-74-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,136"
            data-variant_id="2173"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="//www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-145-ar-80-rs-12"
                title=" Apollo AMAZER 4G LIFE 145/80 R12"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">145/80 R12</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,136</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tube Type</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2174"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="amazer-4g-life-145-80-r-13-75-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,562"
            data-variant_id="2174"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-145-ar-80-rs-13"
                title=" Apollo AMAZER 4G LIFE 145/80 R13"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">145/80 R13</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,562</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2175"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="amazer-4g-life-155-65-r-13-73-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,401"
            data-variant_id="2175"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-155-ar-65-rs-13"
                title=" Apollo AMAZER 4G LIFE 155/65 R13"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">155/65 R13</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,401</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2177"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="155-70-r-13-75-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,774"
            data-variant_id="2177"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-155-ar-70-rs-13"
                title=" Apollo AMAZER 4G LIFE 155/70 R13"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">155/70 R13</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,774</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="5304"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="165-70-r14-81t-tl"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,618"
            data-variant_id="5304"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-165-ar-70-rs-14"
                title=" Apollo AMAZER 4G LIFE 165/70 R14"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">165/70 R14</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,618</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2178"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="165-70-r-13-79-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 4,013"
            data-variant_id="2178"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-165-ar-70-rs-13"
                title=" Apollo AMAZER 4G LIFE 165/70 R13"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">165/70 R13</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 4,013</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2180"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="155-65-r-14-75-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,628"
            data-variant_id="2180"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-155-ar-65-rs-14"
                title=" Apollo AMAZER 4G LIFE 155/65 R14"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">155/65 R14</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,628</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li
            className="col-12 col-md-3 col-sm-6 items selectProduct newListItem product-new px-sm-2"
            data-custom-id="2176"
            data-title="Apollo AMAZER 4G LIFE"
            data-id="580"
            data-make_slug="apollo"
            data-model_slug="amazer-4g-life"
            data-variant_slug="165-65-r-13-77-t"
            data-v_type_slug="car"
            data-v_model_slug=""
            data-v_make_slug=""
            data-v_variant_slug=""
            data-price="&#8377; 3,713"
            data-variant_id="2176"
          >
            <div className="product-item">
              <Link
                data-capture="event"
                data-cat="Tyre Dealer Individual"
                data-act="Click"
                data-lbl="Tyre Listing"
                to="///www.tyreplex.com/apollo-tyres/amazer-4g-life/sw-165-ar-65-rs-13"
                title=" Apollo AMAZER 4G LIFE 165/65 R13"
                className="col-12 px-0"
              >
                <div className="d-flex">
                  <div className="col-7 ps-3 pt-3">
                    <div className="product-description col-sm-12 col-12 text-start px-0">
                      <div className="tyre_brand">
                        <span className="brand-img">
                          <span className="brand-logo brand-apollo"></span>
                        </span>
                      </div>
                      <div className="m-name">AMAZER 4G LIFE</div>
                      <div className="v-name">165/65 R13</div>
                      <div className="d-flex align-items-center common-rating">
                        <div className="rt-bg">
                          <span className="fa fill-star"></span>
                          <span>4</span>
                        </div>
                        <span className="review-text">320 Reviews</span>
                      </div>
                      <div className="product-price">&#8377; 3,713</div>
                      <div className="offer-text">Offer available</div>
                      <div className="product-feature px-0">Tubeless</div>
                    </div>
                  </div>
                  <div className="col-5 img-section">
                    <span className="warranty-tag"> 5 Year Warranty</span>
                    <img
                      className="img-fluid lazy bg-img"
                      data-original="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                      alt="Apollo AMAZER 4G LIFE"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </li>
        </ul>

        {/* View More Button */}
        <div className="load_more_container mb-3">
          <div className="col-12 text-center dynamic_loader d-none spinner-border theme-text p-0"></div>
          <button
            type="button"
            className="loadMore-btn mx-auto load_more_records text-link-arrow text-mute"
            data-m=""
            data-tm=""
            data-type="dealer_page"
            data-filter=""
            data-vv=""
            data-dealer_id="23474"
            data-t="8809"
            data-p="2"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tyres;
