const express = require('express');
const OrgController = require('../controllers/OrgController');

const router = express.Router();

router.get('/', OrgController.getAll);
router.get('/:id', OrgController.getOne);

module.exports = router;
