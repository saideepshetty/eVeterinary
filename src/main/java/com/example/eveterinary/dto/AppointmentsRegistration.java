package com.example.eveterinary.dto;

import com.example.eveterinary.model.Species;
import lombok.Data;


@Data
public class AppointmentsRegistration {
    private String patientName;
    private String doctorName;
    private String daysAvailable;
    private Species species;
}
