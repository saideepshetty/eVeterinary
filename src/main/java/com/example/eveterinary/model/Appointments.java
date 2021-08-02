package com.example.eveterinary.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Appointments {

    @Id
    @GeneratedValue
    private int id;
    private String patientName;
    private String doctorName;
    private String daysAvailable;
    private Species species;


}
