'use strict'

class Patient {
    constructor(patientNo, firstName, middleName, lastName, dob, department, outPatient) {
        this.patientNo = patientNo;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dob = dob;
        this.department = department;
        this.outPatient = outPatient;
    }
}

module.exports = Patient;