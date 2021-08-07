import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
// import LoaderButton from "../components/LoaderButton";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from "./Signup.js";
import DoctorsAvailability from "./DoctorsAvailability.js";
import Appointment from './Appointment';


function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/patientSignUp">
          <Signup />
        </Route>
        <Route path="/doctorsAvailability">
          <DoctorsAvailability />
        </Route>
        <Route path="/appointmentsSchedule">
          <Appointment />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
