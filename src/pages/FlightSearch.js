import React, { useState, useEffect } from "react";
import "./CustomStyles.css";
import axios from "axios";

function FlightSearch() {
  const [dataAva, setDataAva] = useState("start");
  const [destinationList, setDestinationList] = useState([]);
  const [departureList, setDepartureList] = useState([]);
  const [flightList, setFlightList] = useState([]);
  const [date, setdate] = useState("");
  const [journey, setJourney] = useState({
    day: "",
    destination: "",
    departure: "",
  });

  const getDestinationList = () => {
    axios
      .get("/flight/find/depsanddes")
      .then((response) => {
        setDestinationList(response.data.destinations);
        setDepartureList(response.data.departures);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const getFlightList = (day) => {
    console.log(journey);
    axios
      .post("/flight/find", { ...journey, day: day })
      .then((response) => {
        console.log(response.data);
        setFlightList(() => [...response.data]);
        if (response.data.length !== 0) {
          setDataAva("Ok");
        } else {
          setDataAva("NoData");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    getDestinationList();
  }, []);

  const handleChange = (e) => {
    setJourney((cur) => ({
      ...cur,
      [e.target.id]: e.target.value,
    }));
  };

  const search = () => {
    const { destination, departure } = journey;
    if (destination !== "" && departure !== "" && date !== "") {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var d = new Date(date);
      var dayName = days[d.getDay()];
      getFlightList(dayName);
    }
  };

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
                list="datalistOptions1"
                id="departure"
                placeholder="From?"
                value={journey.departure}
                onChange={handleChange}
              />
              <datalist id="datalistOptions1">
                {departureList.map((country) => (
                  <option value={country} />
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
                id="destination"
                placeholder="To?"
                value={journey.destination}
                onChange={handleChange}
              />
              <datalist id="datalistOptions">
                {destinationList.map((country) => (
                  <option value={country} />
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
                id="date"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Date (Ex: 2021-07-08)"
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 m-auto">
              <button
                type="button"
                className="btn btn-lg home-button mb-3 mt-4"
                style={{ fontSize: "18px" }}
                onClick={search}
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
      <div
        className="row justify-content-center mt-5"
        style={{
          display: dataAva === "Ok" ? "" : "none",
        }}
      >
        {flightList.map((flight) => (
          <div className="row justify-content-center mb-3">
            <div class="card col-5  border-primary text-dark  p-0">
              <div
                class="card-header text-center"
                style={{ fontSize: "25px", fontFamily: "revert" }}
              >
                {flight.airlineName}
              </div>
              <div class="card-body row">
                <div className="col-6 text-center">
                  <h4 class="card-title">Rs.{flight.price}.00</h4>
                  <p class="card-text" style={{ fontSize: "18px" }}>
                    Flying Duration : {flight.duration} Hours
                    <br />
                    Standard Economy
                  </p>
                </div>
                <div className="col-6 text-center">
                  <div
                    class="card col-8 offset-2 shadow rounded-5 border-0 "
                    style={{ backgroundColor: "#f0f3f5", fontSize: "18px" }}
                  >
                    <div class="card-body">
                      <i class="fas fa-plug"></i>
                      <span style={{ paddingLeft: "10px" }}>
                        Power & USB outlets
                      </span>
                      <br />
                      <i class="fas fa-utensils"></i>
                      <span style={{ paddingLeft: "10px" }}>Meal provided</span>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-3">
                  <div className="col-auto">
                    <a
                      href={"/booking/" + flight.id + "/" + date}
                      class="btn home-button"
                      style={{ fontSize: "18px" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightSearch;
