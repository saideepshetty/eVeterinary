import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
// import LoaderButton from "../components/LoaderButton";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap-floating-label";
import Select from 'react-select'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const backendBaseUrl = "http://localhost:8080"
const appointmentServiceUrl = backendBaseUrl + "/appointments"
const doctorsServiceUrl = backendBaseUrl + "/doctor"
let dayIteratorGlobal = -1
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
                "patientName": fields.patientName,
                "species": fields.species,
                "doctorName": fields.doctorName,
                "daysAvailable": fields.daysAvailable
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


    function getDays() {
        const days = [];
        const day = [];
        for (var tuple = 0; tuple < allSpecies.length; tuple++) {
            const totalDays = allSpecies[tuple].daysAvailable;
            const stringLength = totalDays.length;
            days.push(totalDays.substr(1, stringLength - 2).split(","))
        }
        for (var j = 0; j < days.length; j++) {
            for (var k = 0; k < days.length; k++) {
                if (!day.includes(days[j][k])) {
                    day.push(days[j][k]);
                }

            }
        }
        day.splice(2, 1);
        const dayOptions = []
        day.map(d => {
            const o = {};
            o['value'] = d;
            o['label'] = d;
            dayOptions.push(o);
        })
        return dayOptions;
    }
    

    function renderForm() {

        return (
            // <Form onSubmit={handleSubmit}>

            <Form onSubmit={handleSubmit}>
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

                    <Select
                        selectedOption={{ value: fields.species, label: fields.species }}

                        options={allSpecies.map(e => {
                            return { value: e.speciality, label: e.speciality };
                        })}

                        onChange={(selectedOption) => {
                            handleFieldChange({
                                target: {
                                    id: "species",
                                    value: selectedOption.value
                                }
                            })
                        }}
                    >

                    </Select>
                </Form.Group>


                <Form.Group controlId="doctorName" size="lg">
                    <Form.Label>Doctor Name</Form.Label>
                    <Select
                        selectedOption={{ value: fields.doctorName, label: fields.doctorName }}

                        options={allSpecies.map(e => {
                            return { value: e.doctorName, label: e.doctorName };
                        })}

                        onChange={(selectedOption) => {
                            handleFieldChange({
                                target: {
                                    id: "doctorName",
                                    value: selectedOption.value
                                }
                            })
                        }}
                    >

                    </Select>
                </Form.Group>

                <Form.Group controlId="daysAvailable" size="lg">
                    <Form.Label>Days Available</Form.Label>
                    <Select
                        selectedOption={{ value: fields.daysAvailable, label: fields.daysAvailable }}

                        options={getDays()}

                        onChange={(selectedOption) => {
                            handleFieldChange({
                                target: {
                                    id: "daysAvailable",
                                    value: selectedOption.value
                                }
                            })
                        }}
                    >

                    </Select>
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
            </Form >
        );

    }


    return (
        <div className="Appointment">
            {renderForm()}
        </div>
    );

}

export default Appointment;
