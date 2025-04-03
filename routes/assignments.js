const express = require('express');
const Assignment = require('../models/Assignment');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:courseId', auth, async (req, res) => {
    const assignments = await Assignment.find({ course: req.params.courseId });
    res.json(assignments);
});

module.exports = router;