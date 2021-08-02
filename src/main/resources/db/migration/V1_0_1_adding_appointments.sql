CREATE TABLE IF NOT EXISTS appointments  (
id int NOT NULL PRIMARY KEY,
patient_name  varchar(256),
doctor_name  varchar(256),
days_available  varchar(256),
species  varchar (256)
);