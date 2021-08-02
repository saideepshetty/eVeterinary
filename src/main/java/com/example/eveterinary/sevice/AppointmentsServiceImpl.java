package com.example.eveterinary.sevice;

import com.example.eveterinary.dto.AppointmentsRegistration;
import com.example.eveterinary.dto.PatientRegistration;
import com.example.eveterinary.model.Appointments;
import com.example.eveterinary.model.Patient;
import com.example.eveterinary.repository.AppointmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentsServiceImpl implements AppointmentsService {

    @Autowired
    AppointmentsRepository appointmentsRepository;

    @Override
    public Appointments save(AppointmentsRegistration appointments) throws  Exception{

        if (appointments == null) {
            throw new Exception("Appointments cannot be null.");
        } else if (appointments.getPatientName() == null) {
            throw new Exception("Patient Name cannot be null.");
        } else if (appointments.getDoctorName() == null) {
            throw new Exception("Doctor Name cannot be null.");
        } else if (appointments.getDaysAvailable() == null) {
            throw new Exception("Days cannot be null.");
        } else if (appointments.getSpecies() == null) {
            throw new Exception("Species cannot be null.");
        }
        Appointments newAppointments = Appointments.builder()
                .patientName(appointments.getPatientName())
                .doctorName(appointments.getDoctorName())
                .daysAvailable(appointments.getDaysAvailable())
                .species(appointments.getSpecies()).build();

        return  appointmentsRepository.save(newAppointments);
    }
}
