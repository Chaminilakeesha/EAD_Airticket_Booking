import React from "react";
import "./App.css";
import Home from "./pages/Home";
import FlightSearch from "./pages/FlightSearch";
import EditTicket from "./pages/EditTicket";
import Booking from "./pages/Booking";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/flightSearch" exact>
            <FlightSearch />
          </Route>
          <Route path="/editTicket" exact>
            <EditTicket />
          </Route>
          <Route path="/Booking" exact>
            <Booking />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
