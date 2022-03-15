'use strict'

const express = require('express');
const router = express.Router();

const patientController = require('../controller/patientController');

router.get('/', (req, res) => patientController.getAll(req, res));
router.post('/', (req, res) => patientController.create(req, res));

module.exports = router;