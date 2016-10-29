const express = require('express');
const GuestController = require('../controllers/GuestController');

const router = express.Router();

router.get('/', GuestController.getAll);
router.get('/:id', GuestController.getOne);

module.exports = router;
