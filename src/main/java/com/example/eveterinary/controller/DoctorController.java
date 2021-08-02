package com.example.eveterinary.controller;

import com.example.eveterinary.model.Doctor;
import com.example.eveterinary.sevice.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/doctor")
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @GetMapping(value = "/doctorsAvailability")
    public List<Doctor> doctorsAvailability(){
        return doctorService.findDoctors();
    }

}
