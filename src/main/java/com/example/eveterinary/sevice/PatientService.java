package com.example.eveterinary.sevice;

import com.example.eveterinary.dto.PatientRegistration;
import com.example.eveterinary.model.Patient;

public interface PatientService {
    public Patient save(PatientRegistration patient) throws Exception;
}
