import React from "react";
import "./CustomStyles.css";

function Home() {
  return (
    <div className="container-fluid home-backgroundimage">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-6 home-card pt-3 pb-5">
          <div
            className="row justify-content-center fw-bolder"
            style={{ fontSize: "130px" }}
          >
            Sky High
          </div>
          <div
            className="row justify-content-center fw-bolder"
            style={{ fontSize: "130px" }}
          >
            Welcomes you
          </div>
          <div className="row justify-content-center fs-1 mb-5">
            Find the Perfect Flight
          </div>
          <div className="row justify-content-evenly">
            <div className="col-auto ">
              <a
                href="/flightSearch"
                role="button"
                className="btn fs-3 home-button p-3"
              >
                Search Flight
              </a>
            </div>
            <div className="col-auto ">
              <a
                href="/editTicket"
                role="button"
                className="btn fs-3 home-button p-3"
              >
                Edit Resevation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
