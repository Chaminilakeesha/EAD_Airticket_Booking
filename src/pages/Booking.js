import React from "react";
import "./CustomStyles.css";

function Booking() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 booking-backgroundimage" />
        <div className="col-6 booking-backgroundcolor p-5">
          <div
            className="row justify-content-center mb-5"
            style={{ fontFamily: "fantasy", fontSize: "50px" }}
          >
            Passenger Details
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-user"></i>
              </label>
              <input
                className="form-control"
                id="exampleDataList"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-passport"></i>
              </label>
              <input
                className="form-control"
                id="exampleDataList"
                placeholder="Passport Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-calendar-alt"></i>
              </label>
              <input
                className="form-control"
                id="exampleDataList"
                placeholder="Date Of Birth"
              />
            </div>
          </div>

          <div
            className="row justify-content-center mb-5"
            style={{ fontFamily: "fantasy", fontSize: "50px" }}
          >
            Contact Details
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-phone-square-alt"></i>
              </label>
              <input
                className="form-control"
                id="exampleDataList"
                placeholder="Telephone Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-envelope-open-text"></i>
              </label>
              <input
                className="form-control"
                id="exampleDataList"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 m-auto">
              <button
                type="button"
                className="btn btn-lg home-button mb-3 mt-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ fontSize: "18px" }}
              >
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div
              class="modal-header"
              style={{
                backgroundColor: "green",
                color: "white",
                fontSize: "25px",
              }}
            >
              <h5 class="modal-title" id="exampleModalLabel">
                Resevation Success.
              </h5>
            </div>
            <div class="modal-body" style={{ fontSize: "20px" }}>
              Dear customer,
              <br />
              <br />
              You have made a reservation on ticket nuumber <b>T000001</b>
              successfully.
              <br /> Please use above ticker number to make changes on your
              reservation.
              <br />
              <br />
              Thank you for using Sky High.
              <br />
              Have a safe flight.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ fontSize: "20px" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
