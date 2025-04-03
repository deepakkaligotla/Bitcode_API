const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
});

module.exports = mongoose.model('Assignment', AssignmentSchema);