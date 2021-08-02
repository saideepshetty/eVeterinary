package com.example.eveterinary.repository;

import com.example.eveterinary.model.Appointments;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentsRepository extends CrudRepository <Appointments, Integer>{
}
