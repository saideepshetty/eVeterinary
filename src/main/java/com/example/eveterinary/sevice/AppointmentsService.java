package com.example.eveterinary.sevice;

import com.example.eveterinary.dto.AppointmentsRegistration;
import com.example.eveterinary.model.Appointments;

public interface AppointmentsService {
    public Appointments save(AppointmentsRegistration appointments) throws Exception;
}
