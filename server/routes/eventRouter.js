const express = require('express');
const EventController = require('../controllers/EventController');

const router = express.Router();
console.log('coming from eventRouter');
router.get('/', EventController.getAll);
router.get('/:id', EventController.getOne);
router.post('/', EventController.create);

module.exports = router;
