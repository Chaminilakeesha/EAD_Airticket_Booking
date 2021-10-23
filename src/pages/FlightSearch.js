import React, { useState } from "react";
import "./CustomStyles.css";

const CountryList = [
  { name: "Australia", id: "C0000001" },
  { name: "USA", id: "C0000002" },
  { name: "UK", id: "C0000003" },
];

const FlightList = [
  {
    id: "F0000001",
    airline: "SL Airline",
    price: "Rs.30000",
    duration: "9 hours",
  },
  {
    id: "F0000002",
    airline: "SL Airline",
    price: "Rs.30000",
    duration: "9 hours",
  },
  {
    id: "F0000003",
    airline: "SL Airline",
    price: "Rs.30000",
    duration: "9 hours",
  },
  {
    id: "F0000004",
    airline: "SL Airline",
    price: "Rs.30000",
    duration: "9 hours",
  },
];

function FlightSearch() {
  const [dataAva, setDataAva] = useState("start");

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6 flightsearch-backgroundimage" />
        <div className="col-6 flightsearch-backgroundcolor p-5">
          <div
            className="row justify-content-center mb-5"
            style={{ fontFamily: "fantasy", fontSize: "50px" }}
          >
            Find flight deals
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i className="fas fa-plane-departure"></i>
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="From?"
              />
              <datalist id="datalistOptions">
                {CountryList.map((country) => (
                  <option value={country.name} />
                ))}
              </datalist>
            </div>
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-plane-arrival"></i>
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="To?"
              />
              <datalist id="datalistOptions">
                {CountryList.map((country) => (
                  <option value={country.name} />
                ))}
              </datalist>
            </div>
          </div>
          <div className="row mb-3">
            <div class="input-group input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg">
                <i class="fas fa-calendar-day"></i>
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Date (Ex: 2021-07-08)"
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
          display: dataAva === "start" ? "" : "none",
        }}
      >
        <i class="fas fa-search col-1 fa-3x m-auto mt-5"></i>
        <div class="w-100"></div>
        Fill details and search to view available offers
      </div>
      <div
        className="row justify-content-center m-5"
        style={{
          fontSize: "60px",
          fontFamily: "cursive",
          color: "ThreeDShadow",
          display: dataAva === "NoData" ? "" : "none",
        }}
      >
        <i class="fas col-1 fa-search fa-3x m-auto mt-5"></i>
        <div class="w-100"></div>
        No available offers. Try changing date.
      </div>
      <div className="row justify-content-center">
        {FlightList.map((flight) => (
          <div class="card text-center">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/booking" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div class="card-footer text-muted">2 days ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightSearch;
