var express = require('express');
var router = express.Router();
const Meetings = require(__dirname+'/../models/Meetings');
const Messages = require(__dirname+'/../models/Messages');
const Users = require(__dirname+'/../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/user/createUser', async (req, res) => {
  try {
    const {username, password, email, phonenumber, role} = req.body;  
    const status = await Users.find({name: username});
    if (status.length > 0) {
      return res.json({status: 'User Already Exists'})
    }
    else{
      const flag = await Users.create({name:username, password:bcrypt.hashSync(password, saltRounds), email: email, phoneNumber:phonenumber, role:role});
    }
    return res.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/user/Meetings', async (req, res) => {
  try {
    const {attendeeId} = req.body;
    meetings = await Meetings.find({"attendees._id": attendeeId})
    return res.json(meetings)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/user/addMessage', async (req, res) => {
  try {
    const message = req.body;  
    const status = await Messages.create(message);
    return res.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/user/getMessage', async (req, res) => {
  try {
    const {senderId, receiverId} = req.body;  
    const messages = await Messages.find({
      $or: [
          { senderId:senderId, receiverId:receiverId },
          { senderId: receiverId, receiverId: senderId }
      ]
  });
    return res.json(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/user/getUserName', async (req, res) => {
  try {
    const { userId } = req.body;
    // Find the user by ObjectId
    const user = await Users.findById(userId);

    if (user) {
      // If user is found, return the user name
      return res.json({ username: user.name });
    } else {
      // If user is not found, return an error message
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
