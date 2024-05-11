const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    organizer: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    attendees: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }],
    duration: {
        type: Date,
        required: true,
    },
    meetlink: {
        type: String,
        required: true,
    },
});

module.exports = new mongoose.model('Meetings', MeetingSchema);

