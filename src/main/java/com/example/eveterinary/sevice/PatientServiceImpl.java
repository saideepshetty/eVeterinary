package com.example.eveterinary.sevice;

import com.example.eveterinary.dto.PatientRegistration;
import com.example.eveterinary.model.Patient;
import com.example.eveterinary.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    PatientRepository patientRepository;

    @Override
    public Patient save(PatientRegistration patient) throws Exception {
        if (patient == null) {
            throw new Exception("Patient cannot be null.");
        } else if (patient.getUserName() == null) {
            throw new Exception("User Name cannot be null.");
        } else if (patient.getPassword() == null) {
            throw new Exception("Password cannot be null.");
        } else if (patient.getPatientName() == null) {
            throw new Exception("Patient Name cannot be null.");
        } else if (patient.getPatientAge() == null) {
            throw new Exception("Patient Age cannot be null.");
        } else if (patient.getOwnerName() == null){
            throw new Exception("Owner Name cannot be null.");
        }else if (patient.getSpecies() == null){
            throw new Exception("Species cannot be null.");
        }
        Patient newPatient = Patient.builder()
                .userName(patient.getUserName())
                .patientName(patient.getPatientName())
                .patientAge(patient.getPatientAge())
                .password(patient.getPassword())
                .species(patient.getSpecies())
                .ownerName(patient.getOwnerName()).build();

        return  patientRepository.save(newPatient) ;
    }
}
