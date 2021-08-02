package com.example.eveterinary.sevice;

import com.example.eveterinary.model.Doctor;
import com.example.eveterinary.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    DoctorRepository doctorRepository;

    @Override
    public List<Doctor> findDoctors() {

        return doctorRepository.findAll();
    }
}
