import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Form from "react-bootstrap/Form";
// import LoaderButton from "../components/LoaderButton";
import Button from "react-bootstrap/Button";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const urlName = "http://localhost:8080/patient"

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



function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: "",
    name: "",
    ownername: "",
    species: "",
    age: ""
  });
  

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    fetch(urlName + "/patientSignUp",{
      method: "POST",
      body:JSON.stringify({
        "userName": fields.userName,
        "password": fields.password,
        "ownerName": fields.ownerName,
        "patientName": fields.patientName,
        "patientAge": fields.patientAge,
        "species": fields.species
      }),
      
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    } 
    })    
    .then(res => res.json())
    .then((data) => {
      console.log("Data received in response", data)
    })
    .catch(console.log);
  }

  function renderForm() {
    return (
     // <Form onSubmit={handleSubmit}>
      <Form onClick={handleSubmit}>
        <Form.Group controlId="userName" size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={fields.userName}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="patientAge" size="lg">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={fields.patientAge}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="patientName" size="lg">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={fields.patientName}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="ownerName" size="lg">
          <Form.Label>OwnerName</Form.Label>
          <Form.Control
            type="text"
            value={fields.ownerName}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="species" size="lg">
          <Form.Label>Species</Form.Label>
          <Form.Control
            type="species"
            value={fields.species}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          variant="success"
          // isLoading={isLoading}
          // disabled={!validateForm()}
        >
          Signup
        </Button>
      </Form>
    );
  
  }
  

  return (
    <div className="Signup">
      {renderForm()}
    </div>
  );

}

export default Signup;
