'use strict'

const Patient = require('../model/patient')
const patientDAO = require('../db/patientDAO');

const getAll = async (req, res) => {
    try {
        const patients = await patientDAO.getAll();
        const data = patients.map(a => { a.dob = a.dob.toISOString().slice(0,10); return a;})
        res.render('patients', {patients: data});
    } catch (err) {
        console.log(err);
        res.send({err})
    }
}

const create = async (req, res) => {
    try {
        const {patient_no, first_name, middle_name, last_name, dob, department, out_patient} = req.body;
        const patient = new Patient(patient_no, first_name, middle_name, last_name, dob, department, out_patient);
        const result = await patientDAO.create(patient);
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send({err})
    }
}

module.exports = {
    getAll, create
}