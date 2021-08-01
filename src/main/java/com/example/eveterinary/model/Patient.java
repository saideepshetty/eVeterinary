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
public class Patient {

    @Id
    @GeneratedValue
    private Integer id;
    private String patientName;
    private String ownerName;
    private Integer patientAge;
    private Species species;
    private String userName;
    private String password;

}
