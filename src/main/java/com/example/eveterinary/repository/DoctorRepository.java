package com.example.eveterinary.repository;

import com.example.eveterinary.model.Doctor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends CrudRepository<Doctor, Integer> {
    @Override
    List<Doctor> findAll();
}
