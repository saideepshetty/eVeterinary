package com.example.eveterinary.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Doctor {
    @Id
    @GeneratedValue
    private int id;
    private String doctorName;
    private String daysAvailable;
    private String speciality;

}
