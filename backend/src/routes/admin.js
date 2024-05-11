var express = require('express');
var router = express.Router();
const Meetings = require(__dirname+'/../models/Meetings');
const Users = require(__dirname+'/../models/Users');

router.post('/admin/newMeeting', async (req, res) => {
  try {
    const meeting = req.body;
    console.log(meeting);  
    const status = await Meetings.create(meeting);
    return res.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/admin/deleteMeeting', async (req, res) => {
  try {
    const { meetingId } = req.body;
    // Check if the meeting exists
    const meeting = await Meetings.findById(meetingId);
    if (!meeting) {
      return res.status(404).json({ error: 'Meeting not found' });
    }
    // Remove the meeting
    const flag = await Meetings.findByIdAndDelete(meetingId);
    return res.json({ status : 'Deleted Meeting' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/admin/updateMeeting', async (req, res) => {
  try {
    const { meetingId, organizer, time, attendees, duration, meetlink} = req.body;
    // Check if the meeting exists
    const existingMeeting = await Meetings.findById(meetingId);
    if (!existingMeeting) {
      return res.status(404).json({ error: 'Meeting not found' });
    }

    // Update the meeting with the new data
    existingMeeting['organizer'] = organizer;
    existingMeeting['time'] = time;
    existingMeeting['attendees'] = attendees;
    existingMeeting['duration'] = duration;
    existingMeeting['meetlink'] = meetlink;

    const updatedMeeting = await existingMeeting.save()

    return res.json({ status: 'Meeting updated'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/admin/getUsers', async (req, res)=> {
  try {  
    Users.find({}, { _id: 1, name: 1 })
    .then(users => {
        return res.json({users});
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
