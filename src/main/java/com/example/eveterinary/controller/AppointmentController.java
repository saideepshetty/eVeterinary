package com.example.eveterinary.controller;

import com.example.eveterinary.dto.AppointmentsRegistration;
import com.example.eveterinary.dto.PatientRegistration;
import com.example.eveterinary.model.Appointments;
import com.example.eveterinary.model.Patient;
import com.example.eveterinary.sevice.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AppointmentController {

    @Autowired
    AppointmentsService appointmentsService;

    @PostMapping(value = "/appointmentsSchedule", consumes = MediaType.APPLICATION_JSON_VALUE)
    public
    Appointments appointmentsSchedule(@RequestBody AppointmentsRegistration appointmentsRegistration) throws Exception {
        return appointmentsService.save(appointmentsRegistration);
    }

}
