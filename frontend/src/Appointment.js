import logo from './logo.svg';
import './App.css';
import { useState, useEffect     } from "react";
import Form from "react-bootstrap/Form";
// import LoaderButton from "../components/LoaderButton";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap-floating-label";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const backendBaseUrl = "http://localhost:8080"
const appointmentServiceUrl = backendBaseUrl + "/appointments"
const doctorsServiceUrl = backendBaseUrl + "/doctor"
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



function Appointment() {
    const [allSpecies, setAllSpecies] = useState([]);
    useEffect(() => {
        fetch(doctorsServiceUrl + "/doctorsAvailability", {
            method: "GET",
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Data received in response", data)
                setAllSpecies(data);

            })
            .catch(console.log);
        return () => {
            
        }
    }, [])
    const [fields, handleFieldChange] = useFormFields({
        patientName: "",
        doctorName: "",
        daysAvailable: "",
        species: ""
    });


    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        fetch(appointmentServiceUrl + "/appointmentsSchedule", {
            method: "POST",
            body: JSON.stringify({
                "doctorName": fields.doctorName,
                "daysAvailable": fields.daysAvailable,
                "patientName": fields.patientName,
                "species": fields.species
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then((data) => {
                console.log("Data received in response", data);
                // setAllSpecies(data);
            })
            .catch(console.log);
    }


    function renderForm() {

        return (
            // <Form onSubmit={handleSubmit}>

            <Form onClick={handleSubmit}>
                <Form.Group controlId="patientName" size="lg">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={fields.patientName}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
            
                <Form.Group controlId="doctorNames" size="lg">
                <Form.Label>Species</Form.Label>
                    <select aria-label="Floating label select example">
                        {
                            allSpecies.map((e) => <option key={e.id}>{e.speciality}</option>)
                        }
                    </select>
                </Form.Group>


                <Form.Group controlId="doctorName" size="lg">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fields.doctorName}
                        onChange={handleFieldChange}
                    />
                </Form.Group>

                <Form.Group controlId="daysAvailable" size="lg">
                    <Form.Label>Days Available</Form.Label>
                    <Form.Control
                        type="text"
                        value={fields.daysAvailable}
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
        <div className="Appointment">
            {renderForm()}
        </div>
    );

}

export default Appointment;
