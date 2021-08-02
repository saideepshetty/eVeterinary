
import './App.css';
import { useState } from "react";



const urlName = "http://localhost:8080/doctor"

function DoctorsAvailability() {
    const [responseBody, setResponseBody] = useState([]);
    console.log("render funcn works")
    fetch(urlName + "/doctorsAvailability", {
        method: "GET",

    })
    .then(res => res.json())
    .then((data) => {
        console.log("data displayed", data);
        setResponseBody(data);
    })
    .catch(console.log)

    return (
    
        <div className="DoctorsAvailability">
            
            {
                // border='1' style='border-collapse:collapse'
                // setResponseBody
                responseBody.map(
                    ( listValue, index ) => {
                        return (
                        <tr key={index}>
                        <td>{listValue.id}</td>
                        <td>{listValue.doctorName}</td>
                        <td>{listValue.speciality}</td>
                        <td>{listValue.daysAvailable}</td>
                        </tr>
                        
                        );
                    })
                
            }
            
        </div>
    )
}

export default DoctorsAvailability;