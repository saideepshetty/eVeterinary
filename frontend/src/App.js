import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Form from "react-bootstrap/Form";
// import LoaderButton from "../components/LoaderButton";
import Button from "react-bootstrap/Button";

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
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: "",
    name: "",
    ownername: "",
    species: "",
    age: ""
  });


  function renderForm() {
    return (
     // <Form onSubmit={handleSubmit}>
      <Form>
        <Form.Group controlId="username" size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={fields.username}
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
        <Form.Group controlId="age" size="lg">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={fields.age}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="name" size="lg">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={fields.name}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="ownername" size="lg">
          <Form.Label>Ownername</Form.Label>
          <Form.Control
            type="text"
            value={fields.ownername}
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
      { renderForm() }
    </div>
  );

}

export default App;
