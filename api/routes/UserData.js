const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');
const { sendConfirmationEmail } = require('../emailServices');
router.post('/', async (req, res) => {
  const { 
    fullName, 
    age,
    gender, 
    nationality, 
    identification,
    purpose,
    duration,
    dates,
    port, 
    email,
    phone } = req.body;

  try {
    const newUserData = new UserData({
      fullName,
      age,
      gender,
      nationality,
      identification,
      purpose,
      duration,
      dates,
      port,
      email,
      phone
    });

    const savedUserData = await newUserData.save();
    sendConfirmationEmail(email, fullName);
    res.status(200).json(savedUserData);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
