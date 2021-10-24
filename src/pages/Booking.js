import React, { useState } from "react";
import "./CustomStyles.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Booking() {
  const { flightid, date } = useParams();
  const [customerDetails, setCustomerDetails] = useState({
    passportId: "",
    name: "",
    dob: "",
    phoneNumber: "",
    email: "",
    flightId: flightid,
    date: date,
  });
  const [ticketId, setTicketId] = useState("");

  const save = () => {
    const { name, passportId, dob, email, phoneNumber } = customerDetails;
    console.log(name);
    if (
      name !== "" &&
      passportId !== "" &&
      dob !== "" &&
      phoneNumber !== "" &&
      email !== ""
    ) {
      axios
        .post("/ticket/add", customerDetails)
        .then((res) => {
          setTicketId(res.data.ticketNumber);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Insert missing details");
    }
  };

  const handleChange = (e) => {
    setCustomerDetails((cur) => ({
      ...cur,
      [e.target.id]: e.target.value,
    }));
  };

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
                id="name"
                value={customerDetails.name}
                onChange={handleChange}
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
                id="passportId"
                value={customerDetails.passportId}
                onChange={handleChange}
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
                id="dob"
                value={customerDetails.dob}
                onChange={handleChange}
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
                id="phoneNumber"
                value={customerDetails.phoneNumber}
                onChange={handleChange}
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
                id="email"
                value={customerDetails.email}
                onChange={handleChange}
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
                onClick={save}
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
              You have made a reservation on ticket nuumber <b>{ticketId}</b>
              {}
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
