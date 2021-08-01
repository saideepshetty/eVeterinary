package com.example.eveterinary.dto;

import com.example.eveterinary.model.Species;
import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
public class PatientRegistration {
    private String patientName;
    private String ownerName;
    private Integer patientAge;
    private Species species;
    private String userName;
    private String password;
}
