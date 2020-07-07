const express = require('express');

const classControllers = require('../controllers/class-controller');

const router = express.Router();


router.get('/', classControllers.getAllClass);

router.post('/', classControllers.createClass);

router.patch('/:pid', classControllers.updateClass);

router.patch('/isComplete/:pid', classControllers.updateClassIsComplete);

router.delete('/:pid', classControllers.deleteClass);

module.exports = router;