'use strict';

const pool = require('./dbmanager');

const getAll = async () => {
    try {
        // no need get connection, this way automatically release pool when completed
        const [patients] = await pool.query('select * from patient')
        return patients;
    } catch (err) {
        throw err;
    }
}

const create = async (patient) => {
    try {
        // const conn = pool.getConnection();
        const result = await pool.query('insert into patient(patient_no, first_name, middle_name, last_name, dob, department, out_patient) values (?, ?, ?, ?, ?, ?, ?)',
            [patient.patientNo, patient.firstName, patient.middleName, patient.lastName,
                patient.dob, patient.department, patient.outPatient])
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAll, create
}