import React from 'react'

const Payment = () => {
  return (
    <div className='container'>
       <div className="col-12 wheel-payment shadow-box">
            <h2 className="fw-bold">Payment Mode</h2>
            <ul className="nav mt-3 row mx-0 col-sm-6">
              <li
                className="nav-item row col-sm-6 col-6 mx-0 mb-2 px-0 d-flex align-items-center"
              >
                <div
                  className="col-sm-1 col-2 text-center check-icon px-0 d-flex align-items-center"
                >
                  <i className="fa fa-check"></i>
                </div>
                <div className="col-sm-11 col-10 px-2">
                  <h3 className="mb-0">Deposit to Account</h3>
                </div>
              </li>
              <li
                className="nav-item row col-sm-6 col-6 mx-0 mb-2 px-0 d-flex align-items-center"
              >
                <div
                  className="col-sm-1 col-2 text-center check-icon px-0 d-flex align-items-center"
                >
                  <i className="fa fa-check"></i>
                </div>
                <div className="col-sm-11 col-10 px-2">
                  <h3 className="mb-0">Net Banking</h3>
                </div>
              </li>
              <li
                className="nav-item row col-sm-6 col-6 mx-0 mb-2 px-0 d-flex align-items-center"
              >
                <div
                  className="col-sm-1 col-2 text-center check-icon px-0 d-flex align-items-center"
                >
                  <i className="fa fa-check"></i>
                </div>
                <div className="col-sm-11 col-10 px-2">
                  <h3 className="mb-0">Credit Card/Debit Card</h3>
                </div>
              </li>
              <li
                className="nav-item row col-sm-6 col-6 mx-0 mb-2 px-0 d-flex align-items-center"
              >
                <div
                  className="col-sm-1 col-2 text-center check-icon px-0 d-flex align-items-center"
                >
                  <i className="fa fa-check"></i>
                </div>
                <div className="col-sm-11 col-10 px-2">
                  <h3 className="mb-0">UPI</h3>
                </div>
              </li>
              <li
                className="nav-item row col-sm-6 col-6 mx-0 mb-2 px-0 d-flex align-items-center"
              >
                <div
                  className="col-sm-1 col-2 text-center check-icon px-0 d-flex align-items-center"
                >
                  <i className="fa fa-check"></i>
                </div>
                <div className="col-sm-11 col-10 px-2">
                  <h3 className="mb-0">Wallets (PayTM/PhonePe/Amazon etc.)</h3>
                </div>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default Payment
