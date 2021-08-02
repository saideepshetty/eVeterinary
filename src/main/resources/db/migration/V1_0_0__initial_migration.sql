CREATE TABLE IF NOT EXISTS patient  (
 id int NOT NULL PRIMARY KEY,
 patient_name  varchar(256),
 owner_name  varchar(256),
 patient_age  varchar(256),
 species  varchar (256),
 user_name  varchar (256),
 password  varchar (256)
);

CREATE TABLE IF NOT EXISTS  doctor  (
  id int NOT NULL PRIMARY KEY,
  doctor_name  varchar(256),
  speciality  varchar(256),
  days_available text []
);
