package com.example.eveterinary.controller;

import com.example.eveterinary.dto.PatientRegistration;
import com.example.eveterinary.model.Patient;
import com.example.eveterinary.sevice.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class PatientController {
    @Autowired
    PatientService patientService;

    @PostMapping("/patientSignUp")
    public Patient patientSignUp(@RequestBody PatientRegistration patientRegistration) throws Exception {
        return patientService.save(patientRegistration);
    }

}
