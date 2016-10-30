const express = require('express');
const GuestController = require('../controllers/GuestController');

const router = express.Router();
console.log('coming from guestRouter');
router.get('/', GuestController.getAll);
router.get('/:id', GuestController.getOne);

module.exports = router;
