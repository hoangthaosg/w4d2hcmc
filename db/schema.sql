CREATE TABLE patient(  
    patient_no VARCHAR(20) NOT NULL PRIMARY KEY,
    first_name VARCHAR(64) NULL,
    middle_name VARCHAR(64) NULL,
    last_name VARCHAR(64) NULL,
    dob DATE NULL,
    department VARCHAR(64) NULL,
    out_patient VARCHAR(5) NULL
) DEFAULT CHARSET UTF8 COMMENT '';