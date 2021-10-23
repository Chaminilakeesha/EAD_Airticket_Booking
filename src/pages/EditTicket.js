import React, { useState } from "react";
import "./CustomStyles.css";

function EditTicket() {
  const [ticket, setTicket] = useState("start");

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6 flightsearch-backgroundimage" />
        <div className="col-6 flightsearch-backgroundcolor p-5">
          <div
            className="row justify-content-center mb-5"
            style={{ fontFamily: "fantasy", fontSize: "50px" }}
          >
            Edit Your Reservation
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-ticket-alt"></i>
              </label>
              <input
                className="form-control"
                id="exampleDataList"
                placeholder="Ticket Number"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-2 m-auto">
              <button
                type="button"
                className="btn btn-lg home-button mb-3 mt-4"
                style={{ fontSize: "18px" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row justify-content-center m-5"
        style={{
          fontSize: "60px",
          fontFamily: "cursive",
          color: "ThreeDShadow",
          display: ticket === "start" ? "" : "none",
        }}
      >
        <i className="fas col-1 fa-search fa-3x m-auto mt-5"></i>
        <div class="w-100"></div>
        Fill details to edit your reservation.
      </div>
      <div
        className="row justify-content-center m-5"
        style={{
          fontSize: "60px",
          fontFamily: "cursive",
          color: "ThreeDShadow",
          display: ticket === "NoData" ? "" : "none",
        }}
      >
        <i class="fas fa-exclamation col-1 fa-3x m-auto mt-5"></i>
        <div class="w-100"></div>
        No available reservations.Please, recheck the details.
      </div>
      <div
        className="row justify-content-evenly"
        /* style={{
          display: ticket === "NoData" || "start" ? "none" : "",
        }} */
      >
        <div className="col-6">
          <div className="input-group input-group-lg mb-3">
            <label className="input-group-text">
              <i class="fas fa-passport"></i>
            </label>
            <input
              className="form-control"
              id="exampleDataList"
              placeholder="Passport Number"
              readOnly
            />
          </div>
        </div>
        <div className="w-100" />
        <div className="col-6">
          <div className="input-group input-group-lg mb-3 ">
            <label className="input-group-text">
              <i className="fas fa-plane-departure"></i>
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              readOnly
              placeholder="From?"
            />
          </div>
        </div>
        <div className="w-100" />
        <div className="col-6">
          <div className="input-group input-group-lg mb-3">
            <label className="input-group-text">
              <i class="fas fa-plane-arrival"></i>
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              readOnly
              placeholder="To?"
            />
          </div>
        </div>
        <div className="w-100" />
        <div className="col-6">
          <div class="input-group input-group-lg mb-3">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              <i class="fas fa-calendar-day"></i>
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              readOnly
              placeholder="Date (Ex: 2021-07-08)"
            />
          </div>
        </div>
        <div className="w-100" />
        <div className="col-6">
          <div className="w-100" />
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
        <div className="w-100" />
        <div className="col-6">
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
        <div className="w-100" />
        <div className="col-6">
          <div className="input-group input-group-lg mb-5">
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

        <div className="row justify-content-center mb-5">
          <div className="col-auto">
            <button
              type="button"
              className="btn home-button"
              style={{ fontSize: "18px" }}
            >
              Update Reservation
            </button>
          </div>
          <div className="col-1" />
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-danger"
              style={{ fontSize: "18px" }}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      </div>
      {/* result showing */}
    </div>
  );
}

export default EditTicket;
