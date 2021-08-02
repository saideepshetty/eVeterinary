package com.example.eveterinary.controller;

import com.example.eveterinary.dto.PatientRegistration;
import com.example.eveterinary.model.Patient;
import com.example.eveterinary.sevice.DoctorService;
import com.example.eveterinary.sevice.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    PatientService patientService;

    @PostMapping( value = "/patientSignUp", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Patient patientSignUp(@RequestBody PatientRegistration patientRegistration) throws Exception {
        return patientService.save(patientRegistration);
    }

}
