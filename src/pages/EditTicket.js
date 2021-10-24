import React, { useState } from "react";
import "./CustomStyles.css";
import axios from "axios";

function EditTicket() {
  const [ticket, setTicket] = useState("start");
  const [ticketId, setTicketId] = useState("");
  const [update, setUpdate] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    id: ticketId,
    passportId: "",
    dob: "",
    phoneNumber: "",
    email: "",
    customerId: "",
    date: "",
    destination: "",
    departure: "",
    name: "",
  });

  const handleChange = (e) => {
    setTicketDetails((cur) => ({
      ...cur,
      [e.target.id]: e.target.value,
    }));
  };

  const getTicketDetails = () => {
    axios
      .get("/ticket/find/" + ticketId)
      .then((response) => {
        setTicketDetails(response.data);

        setTicket("Ok");
      })
      .catch((error) => {
        setTicket("NoData");
      });
  };

  const updateTicket = () => {
    const { name, phoneNumber, email } = ticketDetails;

    if (name !== "" && phoneNumber !== "" && email !== "") {
      axios
        .put("/ticket/update/" + ticketId, { name, phoneNumber, email })
        .then((res) => {
          setUpdate(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Insert missing details");
    }
  };

  const cancelTicket = () => {
    axios
      .delete("/ticket/delete/" + ticketId)

      .then((res) => {
        setCancel(true);
      })
      .catch((error) => {
        alert(error.message);
      });
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
            Edit Your Reservation
          </div>
          <div className="row">
            <div className="input-group input-group-lg mb-3">
              <label className="input-group-text">
                <i class="fas fa-ticket-alt"></i>
              </label>
              <input
                className="form-control"
                id="ticketId"
                placeholder="Ticket Number"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-2 m-auto">
              <button
                type="button"
                className="btn btn-lg home-button mb-3 mt-4"
                style={{ fontSize: "18px" }}
                onClick={getTicketDetails}
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
        className="row justify-content-evenly mt-5"
        style={{
          display: ticket === "Ok" ? "" : "none",
        }}
      >
        <div className="col-6">
          <div className="input-group input-group-lg mb-3">
            <label className="input-group-text">
              <i class="fas fa-passport"></i>
            </label>
            <input
              className="form-control"
              id="passportId"
              value={ticketDetails.passportId}
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
              id="departure"
              value={ticketDetails.departure}
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
              id="destination"
              value={ticketDetails.destination}
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
              aria-describedby="inputGroup-sizing-lg"
              readOnly
              placeholder="Date (Ex: 2021-07-08)"
              id="date"
              value={ticketDetails.date}
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
              id="name"
              value={ticketDetails.name}
              onChange={handleChange}
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
              id="phoneNumber"
              value={ticketDetails.phoneNumber}
              onChange={handleChange}
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
              id="email"
              value={ticketDetails.email}
              onChange={handleChange}
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
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              onClick={updateTicket}
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
              data-bs-toggle="modal"
              data-bs-target="#cancelModal"
              onClick={cancelTicket}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      </div>
      {cancel && (
        <div
          class="modal fade"
          id="cancelModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ fontSize: "20px" }}
                >
                  Operation success
                </h5>
              </div>
              <div class="modal-body">
                Your reservation is canceled successfully.
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
      )}
      {update && (
        <div
          class="modal fade"
          id="editModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                  style={{ fontSize: "20px" }}
                >
                  Operation success
                </h5>
              </div>
              <div class="modal-body">
                Your reservation is updated successfully.
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
      )}
    </div>
  );
}

export default EditTicket;
